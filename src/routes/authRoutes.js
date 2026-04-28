const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/jwt');

// In-memory user store (until DB models are wired up)
const users = [];

// Register
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    const existing = users.find(u => u.email === email);
    if (existing) {
        return res.status(409).json({ message: "Email already registered. Please log in." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, email, password: hashedPassword });

    console.log("New user registered:", { name, email });

    res.status(201).json({ message: "Account created successfully!" });
});

// Login
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    const user = users.find(u => u.email === email);
    if (!user) {
        return res.status(403).json({ message: "No account found. Please sign up first." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        return res.status(403).json({ message: "Incorrect password. Please try again." });
    }

    const token = jwt.sign({ email: user.email, name: user.name }, JWT_SECRET);

    res.json({
        message: "Login successful!",
        token,
        username: user.name
    });
});

module.exports = router;