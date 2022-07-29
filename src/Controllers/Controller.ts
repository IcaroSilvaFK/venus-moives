import { Request, Response } from 'express';

export interface Controller {
  index?: (
    req: Request,
    res: Response
  ) => Promise<Response<any, Record<string, any>>>;
  store?: (
    req: Request,
    res: Response
  ) => Promise<Response<any, Record<string, any>>>;
  show?: (
    req: Request,
    res: Response
  ) => Promise<Response<any, Record<string, any>>>;
  update?: (
    req: Request,
    res: Response
  ) => Promise<Response<any, Record<string, any>>>;
  delete?: (
    req: Request,
    res: Response
  ) => Promise<Response<any, Record<string, any>>>;
  indexGenres?: (
    req: Request,
    res: Response
  ) => Promise<Response<any, Record<string, any>>>;
}
