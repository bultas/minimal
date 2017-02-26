
const path = require('path');



const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: 'temp/' // for webpack-dev-server output
    },
    module: {
        rules: [{ test: /\.(js|jsx)$/, use: 'babel-loader' }]
    },
    resolve: {
        alias: {
            src: path.resolve(__dirname, 'src')
        }
    },
    devtool: "eval",
    devServer: {
        contentBase: path.join(__dirname, "dev"),
        compress: true,
        port: 9000
    }
};

module.exports = config;
