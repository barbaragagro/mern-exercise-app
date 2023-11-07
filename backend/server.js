import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import workoutRoutes from './routes/workouts.js';
import userRoutes from './routes/user.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/workouts', workoutRoutes);

app.use('/api/user', userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
