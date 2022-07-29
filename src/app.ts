import express from 'express';
import { DB } from './config/DB';
import { router as user_routes } from './routes/UserRoutes';
import { router as content_routes } from './routes/ContentRoutes';
import { router as genre_routes } from './routes/GenreRoutes';

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

app.use('/api', user_routes);
app.use('/api', content_routes);
app.use('/api', genre_routes);

export { app };
