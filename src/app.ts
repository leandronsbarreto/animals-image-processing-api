/*eslint no-undef: "error"*/
/*eslint-env node*/

//Server file
//Development code
import express, { Request, Response } from 'express';
import myRoute from './routes';
import loggerHome from './middleware/loggerHome';

// Server Initialization
const app = express(); //Application object
const port = 3000;

app.get('/', loggerHome, (req: Request, res: Response) => {
  return res.send(
    '<h1>🖺 Welcome to our Image Processing API! 🖾</h1> ' +
      "<h1>Please copy the following URL address and paste it in the browser to visit the instructions' page:</h1> " +
      '<h1>http://localhost:3000/animals</h1>'
  );
});

app.listen(port, () => {
  console.log(`Server is successfully running on ${port}.`);
});

app.use('/animals', myRoute);

export default app;
