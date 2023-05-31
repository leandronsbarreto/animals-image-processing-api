# Image Processing API
Image Processing API project as final assessment test to pass the "Backend Development with Node.js" course at Udacity (Masterschool)

# Project introduction

## Project overview

In this project I had to build an API that can be used in two different ways. As a simple placeholder API, the first allows me to place images into my frontend with the size set via URL parameters for rapid prototyping. The second use case is as a library to serve properly scaled versions of my images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout my site, the API I created handles resizing and serving stored images.

I set up my Node.js project from scratch, installing all dependencies, and wrote all necessary configurations to make my dependencies work together.

In addition to setting up and creating the functionality, I used industry best practices to ensure that my code is as scalable as the architecture I created. Using TypeScript, Unit testing, linting, and formatting, I wrote a code that is not only easy to read but is maintainable, less error-prone, and easier to debug.

## Project summary

This project aimed to give me a real-world scenario in which I would read and write to my disk via a Node.js express server rather than a database. The project served two purposes: to prepare me for setting up scalable code and architecture for real-world projects and tie together some of the most popular middleware and utilities found in Node.js projects.

For this project, I refactored and tested as much as possible while I was building.

# http://localhost:3000

This Node.js project runs on PORT 3000.

## Development server

In order to use the development server, run the following commands:

1. `npm install`
2. `npm run start` ("nodemon --exec ts-node src/app.ts")

## Build server

In order to use the build server, run the following commands:

1. `npm install` 
2. `npm run build` ("npx tsc")
3. `node app.js`

Please enter in the URL bar of your browser http://localhost:3000/.

# Testing

Tests can be executed with:

1. `npm run test`

*This command will create a build folder, format the code with prettier, and then test it with jasmine. 

**Tests were also executed with Postman. No bugs were found before submission.

# Endpoints

- / -> home
- /animals -> main router (index.ts)
- /animals/dolphin -> camel image
- /animals/dolphin -> dolphin image
- /animals/elephant -> elephant image
- /animals/panda -> panda image
- /animals/seal -> seal image

# Instructions 

After running the API locally on PORT 3000, please check instructions on how to use it here: http://localhost3000/animals.

# Prettier and ESLint

To check the code and format it, please run:

`npm run prettier`
`npm run lint`

# Author

Leandro Barreto

# Image sources

https://unsplash.com/
https://symbl.cc/en/

# Support and reference

https://blog.logrocket.com/
https://eslint.org/
https://expressjs.com/
LinkedIn Learning
https://www.typescriptlang.org/
Udacity

# Date of submission

May 31st 2023.
