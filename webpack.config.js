const path = require('path');
const webpack = require('webpack');

const indexHTML = '/app/index.html';
const HTMLWebpackPlugin =  require('html-webpack-plugin');
const HTMLWebPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + indexHTML,
	filename: 'index.html',
	inject: 'body',
});

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const ExtractTextPluginStyles = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

const DefineProd = new webpack.DefinePlugin({'process.env':{NODE_ENV:"'production'"}});

module.exports = {
	devtool: "source-map",
	devServer: {
		port: 8180,
		historyApiFallback: true
	},
	entry: {
		'app': __dirname + '/app/index.jsx'
	},
	devtool: 'source-map',
	module: {
		loaders: [
			{
				test:/\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.scss$/,
          	    use: ExtractTextPluginStyles.extract({
                use: [
					{
						loader: "css-loader",
						query: {
							modules: true
						  }
					}, 
					{
						loader: "sass-loader",
						query: {
							modules: true
						  }
					}
				],
                fallback: "style-loader"
            })
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,  
				use: [{
					loader: 'url-loader',
					options: { 
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'images/[name].[ext]'
					} 
				}]
			}
		]
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/build',
		publicPath: '/'
	},
	plugins: [HTMLWebPluginConfig, ExtractTextPluginStyles, DefineProd]
};