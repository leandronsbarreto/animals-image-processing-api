/*eslint no-undef: "error"*/
/*eslint-env node*/

export function numberVerifier(value: string): boolean {
  return value !== null && value !== '' && !isNaN(Number(value.toString()));
}
