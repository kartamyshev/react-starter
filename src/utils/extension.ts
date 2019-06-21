import { path } from 'ramda';

interface IMultimedia {
  tiff: boolean;
  png: boolean;
  pdf: boolean;
  video: boolean;
}

export const extension = (multimedia: IMultimedia, priorities: string[]) => {
  return priorities.find((ext: string | number) => {
    return path([ext], multimedia) && ext;
  });
};
