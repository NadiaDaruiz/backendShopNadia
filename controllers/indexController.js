const path = require('path')

exports.indexController = (req, res) => {
    // res.send('received get request')
    res.sendFile(path.resolve(__dirname, "../Client", "build", "index.html"))

};


