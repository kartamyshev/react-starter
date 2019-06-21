import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../button.component';

describe('<Button />', () => {
  describe('component rendering', () => {
    it('renders Button instance component', () => {
      const component = shallow(<Button />);
      const instance = component.instance();
      expect(instance).toBeInstanceOf(Button);
    });

    it('default text is rendered when no children are passed', () => {
      const component = shallow(<Button />);
      expect(component.text()).toEqual(Button.label);
    });
  });

  describe('css classnames', () => {
    it('checks if default classname is passed', () => {
      const component = shallow(<Button />);
      expect(component.hasClass('button')).toBeTruthy();
    });

    it('checks if button has "disabled" className when disabled', () => {
      const component = shallow(<Button />);
      component.setProps({ disabled: true });
      expect(component.hasClass('disabled')).toBeTruthy();
    });

    it('checks if button has no "disabled" className when enabled', () => {
      const component = shallow(<Button />);
      expect(component.hasClass('disabled')).not.toBeTruthy();
    });
  });
});
