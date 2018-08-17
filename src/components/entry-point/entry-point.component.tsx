import * as React from 'react';
import { connect, ITheme } from '../../store';
import { classnames } from '@utils/classnames';
import { ButtonComponent as Button } from '@components/button/button-component';

import './entry-point.component.less';

@connect(['theme'])
export class EntryPoint extends React.Component<
  {
    derived?: {
      theme: ITheme;
    };
  },
  null
> {
  public render() {
    const { name, change } = this.props.derived.theme;

    return (
      <div className={this.className}>
        <Button
          onClick={() => change('dark')}
          disabled={name === 'dark'}
          label="Dark"
        />
        <Button
          onClick={() => change('light')}
          disabled={name === 'light'}
          label="Light"
        />
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
