export const classnames = obj => {
  return Object.keys(obj)
    .filter(className => className !== 'undefined' && obj[className])
    .join(' ');
};
