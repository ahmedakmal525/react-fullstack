/**
 * webpack.prod.js
 * The production configuration used for the webpack 4.
 *
 * @author Ahmed Akmal<akmal.ahmed525@gmail.com>
 */
const merge = require("webpack-merge");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const common = require("./webpack.common.js");
require("dotenv").config();

module.exports = merge(common, {
	mode: process.env.ENV,
	bail: false,
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: ["css-loader", "sass-loader"]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("style.css")
	]
});
