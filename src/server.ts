import { app } from './app';

export const startServer = () => {
  app.listen(process.env.PORT || 3000);
};

startServer();
