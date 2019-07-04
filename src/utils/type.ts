export type Type =
  | 'object'
  | 'array'
  | 'null'
  | 'string'
  | 'number'
  | 'boolean'
  | 'symbol'
  | 'function'
  | 'set'
  | 'map';

export const type = (variable: unknown): Type => {
  return Object.prototype.toString
    .call(variable)
    .replace(/\[object (.*)\]/, '$1')
    .toLowerCase();
};
