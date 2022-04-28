const path = require("path");
const constants = require("./constants");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const buildType = process.env.BUILD_TYPE || constants.modes.dev;
const isProduction = buildType === constants.modes.prod;

const result = {};

result.plugins = [
	new MiniCssExtractPlugin({
		filename: "styles.css",
	}),
	new HtmlWebpackPlugin({
		template: path.join(__dirname, "../public/index.html"),
		minify: isProduction,
	}),
];

result.module = {
	rules: [
		{
			test: /\.(png|svg|jpg|jpeg|gif)$/i,
			type: "asset/resource",
		},
		{
			test: /\.(s*)css$/,
			use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
		},
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader",
				options: {
					presets: [
						"@babel/preset-env",
						["@babel/preset-react", { runtime: "automatic" }],
					],
				},
			},
		},
	],
};

if (isProduction) {
	result.optimization = {
		minimize: true,
		minimizer: [new TerserPlugin()],
	};
}

module.exports = result;
