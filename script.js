const os = require("os");
const fs = require("fs");

function operatingSystem(param) {
  fs.writeFileSync("./osInfo.json", JSON.stringify(param));
}

operatingSystem({
  memory: os.totalmem(),
  platform: os.platform(),
  user: os.userInfo(),
});
