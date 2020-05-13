exports.setCors = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin,X-Request-With,Content-Type,Accept');

    res.header('Access-Control-Allow-Methods', 'POST', 'GET', 'DELETE', 'PUT');
    next()
}