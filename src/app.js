const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve frontend
app.use(express.static(path.join(__dirname, './public')));

// Routes
const userRoutes = require('./routes/userRoutes');

// ONLY ONE ROUTE (clean)
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => {
    const users = [
        { name: "Anisha", role: "Frontend Dev" },
        { name: "Unatti", role: "Backend Dev" },
        { name: "Pallavi", role: "Full Stack Dev" },
        { name: "Devyanii", role: "Web Development" }

    ];

    res.render('index', { users });
});

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
});

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

const postRoutes = require('./routes/postRoutes');
app.use('/api/posts', postRoutes);

app.use(express.urlencoded({ extended: true }));

module.exports = app;