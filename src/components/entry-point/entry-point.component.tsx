import * as React from 'react';
import { connect } from '@store';
import { classnames } from '@utils';
import { ButtonComponent as Button } from '@components/button/button-component';

import './entry-point.component.less';

@connect(['theme'])
export class EntryPoint extends React.Component<any, null> {
  public render() {
    const { name } = this.props.derived.theme;

    return (
      <div className={this.className}>
        <Button disabled={name === 'dark'} themeName="dark" label="Dark" />
        <Button disabled={name === 'light'} themeName="light" label="Light" />
      </div>
    );
  }

  private get className() {
    const { name } = this.props.derived.theme;
    return classnames({
      'entry-point': true,
      'entry-point--light': name === 'light',
      'entry-point--dark': name === 'dark'
    });
  }
}
