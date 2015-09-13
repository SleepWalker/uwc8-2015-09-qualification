var path = require('path');

module.exports = {
    entry: [
      'webpack/hot/dev-server',
      'webpack-dev-server/client?http://localhost:8080',
        path.resolve('./src')
    ],
    output: {
        path: path.resolve('./dist'),
        publicPath: '/dist/',
        filename: 'app.js'
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js', '.scss']
    },

    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!autoprefixer?browsers=last 3 versions!sass'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?optional[]=runtime'
            }
        ]
    }
};
