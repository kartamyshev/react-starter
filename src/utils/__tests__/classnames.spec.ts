import { classnames } from '../classnames';

describe('utils/classnames', () => {

  it('checks when only truthy classes are passed', () => {
    const classes = {
      button: true,
      disabled: true
    };
    expect(classnames(classes)).toEqual('button disabled');
  });

  it('checks when truthy and falsy classes are passed', () => {
    const a = 9;
    const classes = {
      'button': true,
      'disabled': false,
      'with-collapsing': a > 10
    };
    expect(classnames(classes)).toEqual('button');
  });

  it('checks when passed array of classes', () => {
    const classes: string[] = ['button', 'collapsed'];
    expect(classnames(classes)).toEqual('button collapsed');
  });

  // xit('checks when passed incorrect parameter type', () => {
  //   const classes: number = 12;
  //   expect(() => classnames(classes)).toThrow();
  // });

});
