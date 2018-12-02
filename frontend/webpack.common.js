/**
 * webpack.common.js
 * The common configuration used for the webpack 4.
 *
 * @author Ahmed Akmal<akmal.ahmed525@gmail.com>
 */
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = process.env.NODE_ENV !== "production";
require("dotenv").config();

module.exports = {
	entry: "./src/index.js",
	resolve: {
		extensions: [".js", ".jsx", ".wasm", ".mjs", ".json"]
	},
	output: {
		filename: "[name].[hash].bundle.js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/"
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "react fullstack",
			template: `${path.resolve(__dirname, "public")}/index.html`,
			inject: true,
			cache: true
		}),
		new CleanWebpackPlugin(["dist"]),
		new MiniCssExtractPlugin({
			filename: mode ? "[name].css" : "[name].[hash].css",
			chunkFilename: mode ? "[id].css" : "[id].[hash].css"
		})
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					mode ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader"
				]
			},
			{
				test: /\.less$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "less-loader",
						options: {
							javascriptEnabled: true
						}
					}
				]
			},
			{
				test: /\.svg$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					"babel-loader",
					{
						loader: "react-svg-loader",
						options: {
							svgo: {
								plugins: [{ cleanupIDs: false }],
								floatPrecision: 2
							}
						}
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: "file-loader"
					}
				]
			},
			{
				test: /\.md$/,
				exclude: /(node_modules|bower_components)/,
				use: "raw-loader"
			},
			{
				test: /\.ico$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "file-loader?name=[name].[ext]"
				}
			}
		]
	}
};
