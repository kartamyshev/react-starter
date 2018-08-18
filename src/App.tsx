import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx';

import { EntryPoint } from '@components/entry-point';
import { AppStore } from '@stores/app.store';
import { ConfigStore } from '@stores/config.store';
import { Provider } from 'mobx-react';

import '@css/base.less';

configure({
  enforceActions: true
});

const configStore = new ConfigStore();
const appStore = new AppStore(configStore);

ReactDOM.render(
  <Provider appStore={appStore} configStore={configStore}>
    <EntryPoint />
  </Provider>,
  document.getElementById('application-container')
);
