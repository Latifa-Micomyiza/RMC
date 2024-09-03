// routes/intellectualRoutes.js
const express = require('express');
const router = express.Router();
const { register, getAllIntellectuals,login } = require('../controller/IntellectualController');
const adminMiddleware = require('../middlewares/auth');

router.post('/register', register);
router.post("/login",login)
router.get('/intellectuals', adminMiddleware, getAllIntellectuals); // Protect the route

module.exports = router;
