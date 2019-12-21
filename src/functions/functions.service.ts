const fs = require('fs');
const pm2 = require('pm2');

import { Injectable } from '@nestjs/common';

@Injectable()
export class FunctionsService {

    listFunctions() {
        return new Promise((res, rej) => {
            fs.readdir('./dist/funcs', function(err, items) {
                if (err) rej(err);
    
                res(items);
            });
        });
    }

    createFunction(name: string, func: string) {
        return new Promise((res, rej) => {
            fs.access('./dist/funcs', function(err) {
                if (err) {
                    fs.mkdir('./dist/funcs', function(err) {
                        if (err) rej(err);
                    });
                }
    
                fs.writeFile(`./dist/funcs/${name}.js`, func, function(err) {
                    if (err) rej(err);
                });
            });
            res(`${name}.js created`);
        });
    }

    runFunction(name: string) {
        pm2.start({
            name,
            script: `./dist/funcs/${name}.js`,
            exec_mode: "fork_mode", // Allows your app to be clustered
            instances: 1, // Optional: Scales your app by 4
            max_memory_restart: "100M" // Optional: Restarts your app if it reaches 100Mo
        }, function(err, apps) {
            pm2.disconnect();
            if (err) throw err;
        });
    }
}
