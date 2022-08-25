import 'dotenv/config';
import 'express-group-routes';
import { router as useRroutes } from './routes/UserRoutes';
import { router as contentRoutes } from './routes/ContentRoutes';
import { router as genreRoutes } from './routes/GenreRoutes';

import express, { Router } from 'express';

const app = express();

app.use(express.json());

//@ts-ignore
app.group('/api', (router: Router) => {
  router.use(useRroutes, contentRoutes, genreRoutes);
});

app.listen(process.env['PORT'] || 5000, () =>
  console.log(
    `server running at http://localhost:${process.env['PORT'] || 5000}`
  )
);
