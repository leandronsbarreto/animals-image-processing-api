/*eslint no-undef: "error"*/
/*eslint-env node*/

import express, { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import Cache from '../../middleware/cache';
import { numberVerifier } from '../../utilities/numberVerifier';
import { resizeImg } from '../../utilities/resizeTool';
import { supportedImgExtensions } from '../../utilities/formatVerifier';
import { errorMessages } from '../../errors/errors';
import data from '../../data/animalsData.json';

const default_ext = 'jpg';

const images = express.Router();

//How long should an image be cached?
const durCache = 1000;
images.use(Cache(durCache));

//GET requests -> image router
images.get('/', async (req: Request, res: Response) => {
  const filename = req.query.filename;
  const width = req.query.width;
  const height = req.query.height;
  const ext = req.query.ext;

  //Logger with use of mockdatabase - which image was viewed?
  //Comparison ignores case
  data.filter(animal => {
    const nameAnimal = animal.animalName;
    const comp = new RegExp(nameAnimal, 'gi');
    if (comp.test(filename as string) === true) {
      console.log(`Image ${animal.animalName}.jpg was viewed.`);
    }
  });

  //Logger with image's properties
  console.info(`Image's properties - ${JSON.stringify(req.query, null, 4)}`);

  //Begin errors check

  //Is file imgExt valid?
  const fileFormatinserted: string = ext?.toString() || default_ext;
  if (!supportedImgExtensions(fileFormatinserted)) {
    return res
      .status(400)
      .send(
        `${errorMessages.invalidExtFirstPart}: ${ext} <br> ${errorMessages.invalidExtSecondPart}`
      );
  }

  //Are query parameters valid?
  if (!filename || !width || !height) {
    return res.status(400).send(errorMessages.queryParamsMissing);
  }

  //Are width and/or height valid?
  if (!numberVerifier(width.toString()) || !numberVerifier(height.toString())) {
    return res.status(400).send(errorMessages.invalidWidthOrHeight);
  }

  //Key variables to check whether file exist, to resize images, and to create thumbnails directory.
  const newLocal = /\.[^/.]+$/;
  const regExp = newLocal;
  const nonexistentFilename = filename.toString().replace(regExp, '');
  const imgExt = filename.toString().match(regExp);
  const fileFormat = imgExt ? imgExt[0] : `.${default_ext}`;
  const imagesDir = path.join(path.resolve(__dirname, '..', '..'), 'images');
  const filePath = path.join(
    imagesDir,
    'originalImages',
    `${nonexistentFilename}${fileFormat}`
  );

  //Does file exist?
  if (!fs.existsSync(filePath)) {
    return res.status(400).send(`${errorMessages.nonexistentFile}`);
  }

  //End errors check

  //Create thumbnails directory
  const thumbnailImg = path.join(imagesDir, 'thumbnails');
  try {
    if (!fs.existsSync(thumbnailImg)) {
      fs.mkdirSync(thumbnailImg);
    }
  } catch (err) {
    return res.status(500).send(`${errorMessages.errorByCreatingDir}`);
  }

  //Resize
  const newFilePath = path.join(
    thumbnailImg,
    `${nonexistentFilename}-${width}x${height}.${fileFormatinserted}`
  );
  try {
    await resizeImg(filePath, newFilePath, Number(width), Number(height));
    return res.sendFile(newFilePath);
  } catch (err) {
    return res.status(500).send(`${errorMessages.errorByResizing}`);
  }
});

export default images;
