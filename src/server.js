const app = require('./app');
const PORT = 3000;
const connectDB = require('./config/db');
connectDB().then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port${PORT}`);
    });
})