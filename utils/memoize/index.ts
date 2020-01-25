export function memoize<T>(fn: (arg: string) => T) {
  const cache: { [key: string]: T } = {};

  return (arg: string) => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}
