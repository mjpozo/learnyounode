
var fs = require('fs');
console.log(fs.readFileSync(process.argv[2],'UTF-8').toString().split("\n").length-1);
