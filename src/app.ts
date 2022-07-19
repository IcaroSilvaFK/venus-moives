import express from 'express';
import { DB } from './config/DB';
import { router as userRoutes } from './routes/UserRoutes';
import { router as movieRoutes } from './routes/MovieRoutes';
import { router as serieRouter } from './routes/SerieRoutes';

const app = express();

app.use(express.json());

(async () => {
  try {
    await DB.authenticate();
    // await DB.sync({ force: true });
    app.emit('connected database');
  } catch (error) {
    console.log('failed to connect to database');
    console.error(error);
  }
})();

app.use('/api', userRoutes);
app.use('/api', movieRoutes);
app.use('/api', serieRouter);

export { app };
