module.exports.validateEmail = function (email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

module.exports.validatePassword = function (password) {
    const minLength = 6;
    return password.length >= minLength;
}