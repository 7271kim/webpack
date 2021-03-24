const path = require('path');

module.exports = {
    mode: 'development', // 1
    entry: [path.join(__dirname,'src','app.js')],
    output: {
        path:path.join(__dirname,'static'),
        filename: 'bundle.[name].js'
    }
}