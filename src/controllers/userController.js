// exports.getUserPosts=(req,res)=>{
//    const userId = req.params.id;

//    res.send(`Posts of user ${userId}`);
// };

const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config/jwt');

// dummy users (for now)
const users = [
  { username: "raj", password: "123" }
];

// SIGNIN
exports.signin = (req, res) => {
  const { username, password } = req.body;

  const user = users.find(
    u => u.username === username && u.password === password
  );

  if (!user) {
    return res.status(403).json({
      message: "Invalid credentials"
    });
  }

  // ✅ create token
  const token = jwt.sign(
    { username: user.username },
    JWT_SECRET
  );

  res.json({
    message: "Login success",
    token
  });
};

exports.getMe = (req, res) => {
  const token = req.headers.authorization;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    res.json({
      user: decoded
    });

  } catch (err) {
    res.status(401).json({
      message: "Invalid token"
    });
  }
};





