import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { AppStore } from '@stores/app.store';
import { ConfigStore, Theme } from '@stores/config.store';
import { classnames } from '@utils/classnames';

import './entry-point.component.less';

@inject('appStore', 'configStore')
@observer
export class EntryPoint extends React.Component<
  {
    appStore?: AppStore;
    configStore?: ConfigStore;
  },
  null
> {
  public render() {
    const { dataCount } = this.props.appStore;
    const { language$, toggleTheme, theme$ } = this.props.configStore;

    const className = classnames({
      'entry-point': true,
      'entry-point--light': theme$ === Theme.Light,
      'entry-point--dark': theme$ === Theme.Dark
    });
    return (
      <div className={className}>
        Entry Point Component <br />
        Amount of items in data array of app store - {dataCount} <br />
        Language from Config Store - {language$} <br />
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
    );
  }
}
