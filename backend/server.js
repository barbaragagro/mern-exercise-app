import dotenv from 'dotenv';
import express from 'express';
import workoutRoutes from './routes/workouts.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use('/api/workouts', workoutRoutes);

app.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
});
