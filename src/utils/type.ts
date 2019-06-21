export type Type =
  'object' | 'array' | 'null' | 'string' | 'number' | 'boolean' |
  'symbol' | 'function' | 'set' | 'map';

export const type = (variable: unknown): Type => {
  const rawType: string = Object.prototype.toString.call(variable);

  const value = rawType
    .slice(1, rawType.length - 1)
    .split(' ')[1]
    .toLowerCase();

  return (value as Type);
};
