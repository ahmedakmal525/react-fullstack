/**
 * webpack.dev.js
 * The development configuration used for webpack 4.
 *
 * @author Ahmed Akmal<akmal.ahmed525@gmail.com>
 */
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
require("dotenv").config();

module.exports = merge(common, {
	mode: process.env.ENV,
	devServer: {
		stats: "errors-only",
		hot: true,
		open: true,
		overlay: false,
		port: process.env.APP_PORT
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					{
						loader: "style-loader"
					},
					{
						loader: "css-loader"
					},
					{
						loader: "sass-loader"
					}
				]
			}
		]
	}
});
