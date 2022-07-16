import express from 'express';
import { DB } from './config/DB';

const app = express();

app.use(express.json());

(async () => {
  try {
    await DB.authenticate();
    // await DB.sync();
    app.emit('connected database');
  } catch (error) {
    console.log('failed to connect to database');
    console.error(error);
  }
})();

export { app };
