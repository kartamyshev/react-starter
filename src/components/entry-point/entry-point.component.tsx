import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { AppStore } from '@stores/app.store';
import { ConfigStore, Theme } from '@stores/config.store';
import { classnames } from '@utils/classnames';

import './entry-point.component.less';

interface IEntryPointsProps {
  appStore?: AppStore;
  configStore?: ConfigStore;
}

@inject('appStore', 'configStore')
@observer
export class EntryPoint extends React.Component<IEntryPointsProps, null> {
  public constructor(props: IEntryPointsProps) {
    super(props);

    const { appStore, configStore } = props;
    appStore.initializeData(configStore.language$);
  }

  public render() {
    const { dataCount$ } = this.props.appStore;
    const { language$, toggleTheme, theme$ } = this.props.configStore;

    const className = classnames({
      'entry-point': true,
      'entry-point--light': theme$ === Theme.Light,
      'entry-point--dark': theme$ === Theme.Dark
    });
    return (
      <div className={className}>
        Entry Point Component <br />
        Amount of items in data array of app store - {dataCount$} <br />
        Language from Config Store - {language$} <br />
        <button onClick={toggleTheme}>Toggle theme</button>
      </div>
    );
  }
}
