const express=require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
res.send('Welcome to DEVCONNECT ');
});

const postRoutes = require('./routes/postRoutes');
app.use('/posts',postRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/users',userRoutes);

const commentRoutes = require('./routes/commentRoutes');
app.use('/comments', commentRoutes);

// app.listen(3000, () => {
// console.log('Server running on port 3000');
// });

module.exports = app;