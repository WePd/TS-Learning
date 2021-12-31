const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const path = require("path")

module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "main.js",
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	devtool: process.env.NODE_ENV === "production" ? false : "inline-source-map",
	devServer: {
		//本地服务器基于的本地环境
		static: "./dist",
		client: {
			progress: false,
		},
		compress: false,
		host: "localhost",
		port: 0411,
		open: true,
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: ["./dist"],
		}),
		new HtmlWebpackPlugin({
			template: "./src/template/index.html",
		}),
	],
}
