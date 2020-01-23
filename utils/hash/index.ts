export function hash(str: string) {
  let result = 5381;
  let i = str.length;

  while (i) {
    result = (result * 33) ^ str.charCodeAt(--i);
  }

  return (result >>> 0).toString(36);
}
