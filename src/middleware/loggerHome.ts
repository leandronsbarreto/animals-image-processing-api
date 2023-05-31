/*eslint no-undef: "error"*/
/*eslint-env node*/

import { Request, Response, NextFunction } from 'express';

const loggerHome = (req: Request, res: Response, next: NextFunction) => {
  const home = req.params;
  if (home) {
    console.log('Home was visited.');
  }
  next();
};

export default loggerHome;
