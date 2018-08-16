import * as React from 'react';
import { connect } from '@store';
import { classnames } from '@utils';

import './entry-point.component.less';

@connect('theme')
export class EntryPoint extends React.Component<any, null> {
  public render() {
    const { name } = this.props.derived;

    return (
      <div className={this.className}>
        <Button disabled={name === 'dark'} themeName="dark" label="Dark" />
        <Button disabled={name === 'light'} themeName="light" label="Light" />
      </div>
    );
  }

  private get className() {
    const { name } = this.props.derived;
    return classnames({
      'entry-point': true,
      'entry-point--light': name === 'light',
      'entry-point--dark': name === 'dark'
    });
  }
}

@connect('theme')
class Button extends React.Component<any, any> {
  public render() {
    const {
      derived: { change },
      own: { themeName, label, disabled }
    } = this.props;

    return (
      <button disabled={disabled} onClick={() => change(themeName)}>
        {label}
      </button>
    );
  }
}
