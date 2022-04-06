const os = require("os");
const fs = require("fs");

function operatingSystem(param) {
  fs.writeFileSync("./osInfo.json", JSON.stringify(param));
}

operatingSystem({
  Memory: os.totalmem(),
  Platform: os.platform(),
  User: os.userInfo(),
});
