export function memoize<T>(fn: (arg: string) => T) {
  const cache: { [key: string]: T } = {};

  return (arg: string, remember = true) => {
    if (cache[arg] === undefined || !remember) {
      cache[arg] = fn(arg);
    }

    return cache[arg];
  };
}
