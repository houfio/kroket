const regex = /^(?<size>-?\d*\.?\d+)(?<unit>[a-z]+|%)$/i;

export function unit(str: string): [number, string] {
  const match = str.match(regex);

  if (!match || !match.groups) {
    return [0, 'px'];
  }

  return [Number(match.groups.size), match.groups.unit];
}
