const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    devtool: 'inline-cheap-source-map',
    resolve: {
        modules: [path.resolve(__dirname, "src"), "node_modules"]
    }
};;
