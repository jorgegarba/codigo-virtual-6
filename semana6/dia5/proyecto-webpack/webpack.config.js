const path = require("path");
module.exports = {
  entry: "./src/js/inicio.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "inicio.js",
  },
};