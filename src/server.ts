import { app } from './app';

export const startServer = () => {
  app.listen(3000, () => {
    console.log('the server is running');
  });
};

startServer();
