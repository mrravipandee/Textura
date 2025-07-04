import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import router from './routes/userRoutes.js';


const PORT = process.env.PORT || 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
await connectDB();

app.use('/api/user', router);

app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
