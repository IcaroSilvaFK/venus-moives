import express from 'express';
import { DB } from './config/DB';
import { router as useRroutes } from './routes/UserRoutes';
import { router as contentRoutes } from './routes/ContentRoutes';
import { router as genreRoutes } from './routes/GenreRoutes';

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

app.use('/api', useRroutes);
app.use('/api', contentRoutes);
app.use('/api', genreRoutes);

export { app };
