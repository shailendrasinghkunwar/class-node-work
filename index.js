const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./model/db');

dotenv.config();

const PORT = process.env.PORT || process.env.port || 3000;

async function startServer() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Server startup failed:', error.message);
    process.exit(1);
  }
}

startServer();
