export const classnames = (obj: any) => {
  return Object.keys(obj)
    .filter((className: string) => className !== 'undefined' && obj[className])
    .join(' ');
};
