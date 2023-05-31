/*eslint no-undef: "error"*/
/*eslint-env node*/

export const enum errorMessages {
  queryParamsMissing = '<h2>⛔️ You have to define a value for the parameters "filename", "width", and "height"</h2> ' +
    '<h2>in order to be able to use the Image Processing API.</h2> ' +
    '<h2>Please check instructions here:</h2> ' +
    "<a href='http://localhost:3000/animals'>http://localhost:3000/animals</a>",
  nonexistentFile = '<h2>😕 This animal was not added into our database.</h2> ' +
    '<h2>Or your input contains special characters</h2> ' +
    '<h2>( !@#$%^&*()_+-=[]{};\':"|,.<>/~ ).</h2> ' +
    '<h2>Please check instructions here:</h2> ' +
    "<a href='http://localhost:3000/animals'>http://localhost:3000/animals</a>",
  errorByResizing = '<h2>😕 File could not be resized</h2>',
  errorByCreatingDir = '<h2>😕 Directory could not be created.</h2>',
  invalidExtFirstPart = '<h2>📁 This file extension is not supported: </h2> ',
  invalidExtSecondPart = '<h2>Please check our supported file extensions here: </h2>' +
    "<a href='http://localhost:3000/animals'>http://localhost:3000/animals</a>",
  invalidWidthOrHeight = '<h2>⛔️ Width and/or height contain(s) special characters</h2> ' +
    '<h2>( !@#$%^&*()_+-=[]{};\':"|,.<>/~ )</h2> ' +
    '<h2>and/or letters<h2> ' +
    '<h2>( [a-z][A-Z] ).</h2> ' +
    '<h2>Please enter a valid number and check instructions here:</h2> ' +
    "<a href='http://localhost:3000/animals'>http://localhost:3000/animals</a>"
}
