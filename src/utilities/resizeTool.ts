/*eslint no-undef: "error"*/
/*eslint-env node*/

import sharp from 'sharp';

export async function resizeImg(
  filePath: string,
  newFilePath: string,
  width: number,
  height: number
) {
  await sharp(filePath)
    .resize(Number(width), Number(height))
    .toFile(newFilePath);
}
