/*eslint-env node*/
/* global it, describe, expectAsync */

import { resizeImg } from '../utilities/resizeTool';
import path from 'path';

describe('Utilities tests', () => {
  const imagesDir = path.join(path.resolve(__dirname, '..'), 'images');
  const testFile = 'camel';
  const fileFormat = 'jpg';
  const filePath = path.join(
    imagesDir,
    'originalImages',
    `${testFile}.${fileFormat}`
  );
  const newFilePath = path.join(
    imagesDir,
    'thumbnails',
    `${testFile}.${fileFormat}`
  );

  it('...testing resizeTool.', async () => {
    await expectAsync(
      resizeImg(filePath, newFilePath, 400, 400)
    ).toBeResolved();
  });

  it('...testing when a file is missing.', async () => {
    await expectAsync(
      resizeImg(path.join(imagesDir, 'nonexistingfile'), newFilePath, 400, 400)
    ).toBeRejected();
  });
});
