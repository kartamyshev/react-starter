import { type } from '../type';

describe('utils/type', () => {

  it('checks if "object" is returned', () => {
    expect(type({ a: true })).toEqual('object');
  });

  it('checks if "array" is returned', () => {
    expect(type([ 1, 2, 3 ])).toEqual('array');
  });

  it('checks if "null" is returned', () => {
    expect(type(null)).toEqual('null');
  });

  it('checks if "string" is returned', () => {
    expect(type('foo')).toEqual('string');
  });

  it('checks if "number" is returned', () => {
    expect(type(12)).toEqual('number');
  });

  it('checks if "boolean" is returned', () => {
    expect(type(false)).toEqual('boolean');
  });

  it('checks if "symbol" is returned', () => {
    expect(type(Symbol(12))).toEqual('symbol');
  });

  it('checks if "function" is returned', () => {
    expect(type(function() {})).toEqual('function');
  });

  it('checks if "set" is returned', () => {
    const set = new Set([ 1, 2, 3 ]);
    expect(type(set)).toEqual('set');
  });

  it('checks if "map" is returned', () => {
    const map = new Map();
    expect(type(map)).toEqual('map');
  });

});
