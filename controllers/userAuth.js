const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
var usersData = require('../models/users')
var secretKey = require('../config.js')
var validationFunctions = require('../middleware/validationMiddleware')

module.exports.getAll = function (req, res) {
    res.status(200);
    res.send(usersData)
}

module.exports.register = function (req, res) {
    const { email, password } = req.body;
    isEmailValid = validationFunctions.validateEmail(email)
    isPasswordValid = validationFunctions.validatePassword(password)

    if (!isEmailValid){
        res.status(400)
        res.send("Please enter a valid email");
        return
    }

    if (!isPasswordValid){
        res.status(400)
        res.send("Password should have atleast 6 characters");
        return
    }

    if (!email || !password) {
        res.status(400)
        res.send("Email and password are required");
        return
    }
    console.log(usersData);
    const existingUser = usersData.find(user => user.email === email);
    if (existingUser) {
        res.status(409)
        res.send("Username already exists");
        return
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = { id:usersData.length+1, email:email, password: hashedPassword };
    usersData.push(newUser)
    res.status(201)
    res.send("User registered successfully");
}

module.exports.login = function (req, res) {
    const { email, password } = req.body;
    isEmailValid = validationFunctions.validateEmail(email)
    isPasswordValid = validationFunctions.validatePassword(password)

    if (!isEmailValid){
        res.status(400)
        res.send("Please enter a valid email");
        return
    }

    if (!isPasswordValid){
        res.status(400)
        res.send("Password should have atleast 6 characters");
        return
    }
    
    if (!email || !password) {
        res.status(400);
        res.send("Email and password are required");
        return;
    }

    const user = usersData.find(user => user.email === email);
    if (!user) {
        res.status(404);
        res.send("User not found");
        return;
    }

    if (!bcrypt.compareSync(password, user.password)) {
        res.status(401);
        res.send("Invalid credentials");
        return;
    }

    const token = jwt.sign({ email: user.email, id: user.id }, secretKey, { expiresIn: '10m' });
    res.status(200)
    res.send(token);
};

