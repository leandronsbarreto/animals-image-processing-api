/*eslint no-undef: "error"*/
/*eslint-env node*/

import { Request, Response, NextFunction } from 'express';
import { name } from '../../package.json';
import cache from 'memory-cache';
import fs from 'fs';

const projectName = `__${name}__`;

interface ResponseCache extends Response {
  sendFileResponse?: Response['sendFile'];
}

type Cache = (
  dur: number
) => (req: Request, res: ResponseCache, next: NextFunction) => void;

const Cache: Cache = dur => {
  const durCache = dur * 500;
  return (req, res, next) => {
    const address = projectName + req.originalUrl;
    const imagesCached = cache.get(address);

    if (imagesCached) {
      if (fs.existsSync(imagesCached)) {
        console.info(`Cached image viewed - ${imagesCached}`);
        return res.sendFile(imagesCached);
      }
      next();
    } else {
      res.sendFileResponse = res.sendFile;
      res.sendFile = (path: string): ResponseCache => {
        cache.put(address, path, durCache);
        res.sendFileResponse?.(path);
        return res;
      };
      next();
    }
  };
};

export default Cache;
