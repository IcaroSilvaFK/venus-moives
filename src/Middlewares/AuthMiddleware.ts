import 'dotenv/config';
import { HttpError } from '../errors/HttpError';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export class AuthMiddleware {
  async tokeVerify(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;
    try {
      if (!authorization) throw new HttpError(401, 'login required');

      const tokenSchema = authorization.split(' ');
      if (tokenSchema.length < 2) throw new HttpError(400, 'invalid token');

      const [_prefix, _token] = tokenSchema;
      const tokenParts = _token.split('.').filter((values) => !!values);

      if (!/^Bearer$/i.test(_prefix))
        throw new HttpError(400, 'invalid prefix');

      if (tokenParts.length < 3) throw new HttpError(400, 'token mal formated');

      const isValidToken = jwt.verify(_token, process.env.SECRET_KEY as string);
      if (!isValidToken) throw new HttpError(400, 'invalid token');

      next();
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error });
    }
  }
}
