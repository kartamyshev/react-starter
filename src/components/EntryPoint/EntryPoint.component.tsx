import * as React from 'react';
import { AppContext, connect } from '@store';
import { classnames } from '@utils';

import './EntryPoint.component.less';

@connect(AppContext)
export class EntryPoint extends React.Component<any, null> {
  public render() {
    const { theme, changeTheme } = this.props;

    return (
      <div className={this.className}>
        <button disabled={theme === 'dark'} onClick={() => changeTheme('dark')}>
          Dark
        </button>
        <button
          disabled={theme === 'light'}
          onClick={() => changeTheme('light')}
        >
          Light
        </button>
      </div>
    );
  }

  private get className() {
    const { theme } = this.props;
    return classnames({
      'entry-point': true,
      'entry-point--light': theme === 'light',
      'entry-point--dark': theme === 'dark'
    });
  }
}
