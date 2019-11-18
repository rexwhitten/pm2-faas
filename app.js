const https = require("https");

const collection = [];

setInterval(() => {
  https.get("https://jsonplaceholder.typicode.com/todos/", res => {
    let rawData = "";

    res.on("data", d => {
      rawData += d;
    });

    res.on("end", () => {
      collection.push(JSON.parse(rawData));
      console.log(collection);
    });
  });
}, 5000);
