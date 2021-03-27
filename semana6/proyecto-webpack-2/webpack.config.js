const path = require("path");
module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/js/index.js"),
    productos: path.resolve(__dirname, "src/js/productos.js"),
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};