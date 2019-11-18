var pm2 = require("pm2");

var functions = [
  {
    name: "function 1",
    script: "./functions/func.js", // Script to be run
    exec_mode: "fork_mode", // Allows your app to be clustered
    instances: 1, // Optional: Scales your app by 4
    max_memory_restart: "100M", // Optional: Restarts your app if it reaches 100Mo,
    autorestart: false
  },
  {
    name: "function 2",
    script: "./functions/func2.js", // Script to be runs
    exec_mode: "fork_mode", // Allows your app to be clustered
    instances: 1, // Optional: Scales your app by 4
    max_memory_restart: "100M" // Optional: Restarts your app if it reaches 100Mo
  }
];

pm2.connect(function(err) {
  if (err) {
    console.error(err);
    process.exit(2);
  }

  functions.forEach(f => {
    pm2.start(f, function(err, apps) {
      console.log(f.name);
      pm2.disconnect(); // Disconnects from PM2
      if (err) throw err;
    });
  });
});
