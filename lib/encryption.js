const bcrypt = require('bcrypt');


// to CREATE hash from the pass

exports.encrypt = async (password) => {
    if (!password) return '';
    return await bcrypt.hash(password, 10)
};

// to CONVERT and compare the pass and the hash

exports.compare = async (password, hash) => {
    return await bcrypt.compare(password, hash)
};