import express, { json } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { classRoute } from './Routes/class_routes.js';
import { studentRoute } from './Routes/student_route.js';

dotenv.config();
const app = express();

mongoose.connect('mongodb://localhost:27017/Internship-Veny')
  .then(() => console.log('MongoDB connected successfully.'))
  .catch((err) => console.error('MongoDB connection error:', err.message));

app.use(express.json());


app.use('/api/class', classRoute);
app.use('/api/student',studentRoute)
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
