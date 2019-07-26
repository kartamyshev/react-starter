import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { AppStore } from '@stores/app.store';
import { ConfigStore } from '@stores/config.store';
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
    const { value$, changeValue } = this.props.configStore;

    const className = classnames({
      'entry-point': true
    });
    return (
      <div className={className}>
        <input
          type="text"
          onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
            changeValue(e.currentTarget.value)
          }
        />
      </div>
    );
  }
}
