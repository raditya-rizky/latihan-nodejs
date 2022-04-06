const fs = require('fs');
const contain = fs.readFileSync("./osInfo.json", "utf-8");
console.log(contain);