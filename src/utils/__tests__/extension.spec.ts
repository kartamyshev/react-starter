import { extension } from '../extension';

const defaultMultimedia = {
  tiff: false,
  png: false,
  pdf: false,
  video: false
};

describe('@utils/extension', () => {

  describe('with only one priority in the list', () => {
    const priorities = ['video'];
    let multimedia = { ...defaultMultimedia };

    afterEach(() => {
      multimedia = { ...defaultMultimedia };
    });

    it('when all values are falsy', () => {
      expect(extension(multimedia, priorities)).toBeUndefined();
    });
    it('when another value then in priority is truthy', () => {
      multimedia.pdf = true;
      expect(extension(multimedia, priorities)).toBeUndefined();
    });
    it('when several other values then in priority are truthy', () => {
      multimedia.pdf = true;
      multimedia.tiff = true;
      expect(extension(multimedia, priorities)).toBeUndefined();
    });
    it('when truthy value matches with priority', () => {
      multimedia.video = true;
      expect(extension(multimedia, priorities)).toEqual('video');
    });

  });

  describe('with different priorities', () => {
    const priorities = ['pdf', 'png', 'tiff'];
    let multimedia = { ...defaultMultimedia };

    afterEach(() => {
      multimedia = { ...defaultMultimedia };
    });

    it('checks when all formats are falsy', () => {
      const result = extension(multimedia, priorities);
      expect(result).toBeUndefined();
    });

    it('checks when last in priorities is truthy', () => {
      multimedia.tiff = true;

      const result = extension(multimedia, priorities);
      expect(result).toEqual('tiff');
    });

    it('checks when two formats are truthy', () => {
      multimedia.tiff = true;
      multimedia.png = true;

      const result = extension(multimedia, priorities);
      expect(result).toEqual('png');
    });

    it('checks when three formats are truthy', () => {
      multimedia.tiff = true;
      multimedia.png = true;
      multimedia.pdf = true;

      const result = extension(multimedia, priorities);
      expect(result).toEqual('pdf');
    });

    it('checks when truthy format is not in priorities list', () => {
      multimedia.video = true;

      const result = extension(multimedia, priorities);
      expect(result).toBeUndefined();
    });
  });
});
