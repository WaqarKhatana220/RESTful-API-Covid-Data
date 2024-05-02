var express = require('express');
var router = express.Router();
const authController = require('../controllers/userAuth')

/**
 * @swagger
 * tags:
 *   name: User Authentication
 *   description: API endpoints for user registration and login
 */

/**
 * @swagger
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *     example:
 *       id: '1'
 *       email: user@example.com
 *       password: hashed_password_here
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Get all users
 *     tags: [User Authentication]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/User'
 */


/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     tags: [User Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: user@example.com
 *               password: password123
 *     responses:
 *       '201':
 *         description: User registered successfully
 *       '400':
 *         description: Invalid request body or missing data
 *       '409':
 *         description: User already exists
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in a user
 *     tags: [User Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               email: waqarulhaq220@gmail.com
 *               password: password1
 *     responses:
 *       '200':
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       '400':
 *         description: Invalid request body or missing data
 *       '404':
 *         description: User not found
 *       '401':
 *         description: Invalid credentials
 */

router.get('/', authController.getAll)
router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
