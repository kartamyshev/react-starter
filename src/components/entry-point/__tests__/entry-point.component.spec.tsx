import * as React from 'react';
import { shallow } from 'enzyme';
import * as sinon from 'sinon';

import { EntryPoint } from '../entry-point.component';
import { Button } from '../../stateless/button.component';

// type Accessor = 'keys' | 'values';
// const objAccessor = (obj: object, accessor: Accessor) => Object[accessor](obj);

describe('<EntryPoint />', () => {
  it('renders children when passed in', () => {
    const child = <div className="unique">This is unique content</div>;
    const component = shallow(<EntryPoint>{child}</EntryPoint>);
    expect(component.contains(child)).toBeTruthy();
  });

  it('has button as a child', () => {
    expect(shallow(<EntryPoint />).find(Button)).toHaveLength(1);
  });

  xit('checks text property of the <Button /> component', () => {
    const component = shallow(<EntryPoint />);
    expect(
      component
        .find(Button)
        .first()
        .props().text
    ).toEqual('Click');
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
    const component = shallow(<EntryPoint />);
    const html = '<div><h1>Heading 1</h1><h1>Heading 2</h1></div>';
    expect(component.html()).toEqual(html);
  });
});

// describe('objAccessor function', () => {
//   it('checks if keys are returned correctly', () => {
//     expect(
//       objAccessor({ a: 'foo', b: 'bar' }, 'keys')
//     ).toEqual(['a', 'b']);
//   });

//   it('checks if values are returned correctly', () => {
//     expect(
//       objAccessor({ a: 'foo', b: 'bar' }, 'values')
//     ).toEqual(['foo', 'bar']);
//   });
// });
