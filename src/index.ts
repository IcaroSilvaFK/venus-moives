import 'dotenv/config';
import { db } from '@config/database';
import { router as useRroutes } from '@routes/ContentRoutes';
import { router as contentRoutes } from '@routes/ContentRoutes';
import { router as genreRoutes } from '@routes/ContentRoutes';
import express from 'express';

const app = express();

app.use(express.json());

(async () => {
  try {
    await db.authenticate();
    // await db.sync({ force: true });
    app.emit('connected database');
  } catch (error) {
    console.log('failed to connect to database');
    console.error(error);
  }
})();

app.use('/api', useRroutes);
app.use('/api', contentRoutes);
app.use('/api', genreRoutes);

app.listen(process.env['PORT'] || 5000);
