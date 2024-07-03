const bcrypt = require('bcrypt');

const hashPw = (pw) => {
    return bcrypt.hashSync(pw, saltRounds);
}

const comparePw = (inputPw, originalPw) => {
    return bcrypt.compareSync(inputPw, originalPw);
}

module.exports