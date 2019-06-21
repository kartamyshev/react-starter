import { type, Type } from './type';
const { isArray } = Array;

interface IObj {
  [key: string]: boolean;
}

type ParamType = IObj | string[];

const truthy = (classes: IObj) => {
  return Object.keys(classes).filter((value: string) => {
    return value !== 'undefined' && classes[value];
  });
};

export const classnames = (classes: ParamType): string => {
  const allowedTypes: Type[] = ['array', 'object'];
  const allowedType = (t: Type) => type(classes) !== t;
  const shouldThrowAnError = allowedTypes.every(allowedType);

  if (shouldThrowAnError) {throw new Error(); }
  return (isArray(classes) ? classes : truthy(classes)).join(' ');
};
