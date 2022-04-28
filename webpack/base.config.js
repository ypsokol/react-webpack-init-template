const path = require("path");
const constants = require("./constants");

const buildType = process.env.NODE_ENV || constants.modes.development;
const PORT = process.env.PORT || 3000;

module.exports = {
	mode: constants.builds[buildType],
	entry: path.join(__dirname, "../src/index.js"),
	output: {
		path: path.join(__dirname, "../dist"),
		filename: "bundle.js",
		assetModuleFilename: "assets/images/[name]-[hash][ext]",
	},
	devServer: {
		port: PORT,
		static: path.join(__dirname, "../dist"),
		hot: true,
	},
};
