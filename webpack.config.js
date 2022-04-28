const webpack = require("webpack");

const baseConfig = require("./webpack/base.config");
const pluginsConfig = require("./webpack/plugins.config");

const config = {
	...baseConfig,
	...pluginsConfig,
};

module.exports = config;
