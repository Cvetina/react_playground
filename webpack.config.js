var path = require('path');

const indexHTML = '/app/index.html';
var HTMLWebpackPlugin =  require('html-webpack-plugin');
var HTMLWebPluginConfig = new HTMLWebpackPlugin({
	template: __dirname + indexHTML,
	filename: 'index.html',
	inject: 'body',
});

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ExtractTextPluginStyles = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
	devtool: "source-map",
	devServer: {
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
						name: 'images/[hash]-[name].[ext]'
					} 
				}]
			}
		]
	},
	output: {
		filename: '[name].js',
		path: __dirname + '/build'
	},
	plugins: [HTMLWebPluginConfig, ExtractTextPluginStyles]
};