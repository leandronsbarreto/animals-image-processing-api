/*eslint no-undef: "error"*/
/*eslint-env node*/

export function supportedImgExtensions(ext: string) {
  return ['gif', 'jpeg', 'jpg', 'png', 'webp'].includes(ext);
}
