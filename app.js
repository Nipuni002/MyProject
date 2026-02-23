console.log("Node.js project setup successful!");

const fs = require('fs');

fs.writeFile('file.txt', 'Hello World!', function (err) {
    if (err) throw err;
    console.log('File saved!');
});