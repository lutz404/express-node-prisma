const fs = require("fs");
const path = require("path");

module.exports = routes => {
  fs.readdirSync(__dirname)
    .filter(file => file.indexOf(".") !== 0 && file !== "index.js")
    .forEach(file => require(path.resolve(__dirname, file))(routes));
};
