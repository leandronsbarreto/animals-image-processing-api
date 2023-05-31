/*eslint no-undef: "error"*/
/*eslint-env node*/

import express, { Request, Response } from 'express';
import images from './animals/images';
import data from '../data/animalsData.json';

const myRoute = express.Router();

myRoute.get('/', (req: Request, res: Response) => {
  res
    .status(200)
    .send(
      '<h1>🐘 🐪 🐼 🐬 In order to start using our Image Processing API, you </h1>' +
        '<h1>have to enter the following URL address in the browser:</h1> ' +
        '<h1>http://localhost:3000/animals/images?filename=animal.jpg&width=width&height=height&ext=imgExt</h1> ' +
        '<h1>Please follow the three steps below and have fun 🌳 🌤 🐚 🌊 ❄:</h1> ' +
        '<hr>' +
        '<h2><em>1)</em> Replace the word "animal" in the URL by the name of one of the animals below:</h2> ' +
        `<h2>. ${data[0].animalName}</h2> ` +
        `<h2>. ${data[1].animalName}</h2> ` +
        `<h2>. ${data[2].animalName}</h2> ` +
        `<h2>. ${data[3].animalName}</h2> ` +
        `<h2>. ${data[4].animalName}</h2> ` +
        '<hr>' +
        '<h2><em>2)</em> Replace the words "width" and "height" in the URL by numbers.</h2> ' +
        '<h3>*Please make sure to use ONLY numbers in these fields.</h3> ' +
        '<hr>' +
        '<h2><em>3)</em> Replace the words "imgExt" in the URL one of our supported formats.</h2> ' +
        '<h3>Our supported formats are: .gif, .jpg, .jpeg, .png, and webp.</h3> ' +
        '<h3>*Please make sure to use ONLY lowercase letters in this field.</h3> '
    );
});

myRoute.use('/images', images);
export default myRoute;
