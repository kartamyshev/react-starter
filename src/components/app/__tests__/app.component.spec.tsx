import * as React from 'react';
import { shallow } from 'enzyme';

import App from '../app.component';

describe('<App />', () => {
  xit('renders children when passed in', () => {
    const child = <div className="unique">This is unique content</div>;
    const component = shallow(<App>{child}</App>);
    expect(component.contains(child)).toBeTruthy();
  });

  it('checks foo element has "bar" className', () => {
    const component = shallow(
      <div>
        <div className="foo bar" />
        <div className="foo bar" />
        <div className="foo bar" />
      </div>
    );

    component.find('.foo').forEach(node => {
      expect(node.hasClass('bar')).toBeTruthy();
    });
  });

  xit('checks if proper html is returned from the component', () => {
    const component = shallow(<App />);
    const html = '<div><h1>Heading 1</h1><h1>Heading 2</h1></div>';
    expect(component.html()).toEqual(html);
  });
});
