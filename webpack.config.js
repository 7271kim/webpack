const path  = require('path');

module.exports = {
    //mode: 'development',
    mode: 'production',
    entry: {
        app: [ 'whatwg-fetch','@babel/polyfill',path.join(__dirname,'src','js','app.js') ],
        react: [ path.join(__dirname,'src','js','react.js') ]
    },
    output: {
        path: path.join(__dirname,'static','js'),
        filename: '[name].js',
        environment: {
            arrowFunction: false,
            bigIntLiteral: false,
            const: false,
            destructuring: false,
            dynamicImport: false,
            forOf: false,
            module: false,
        }
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: ['/node_modules']
          }]
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },
  };