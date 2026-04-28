const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        { name: "Test User 1" },
        { name: "Test User 2" }
    ]);
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.send("User received ✅");
});

module.exports = router;