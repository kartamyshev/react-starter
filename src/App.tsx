import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure, observable } from 'mobx';

import { EntryPoint } from '@components/entry-point';
import { AppStore } from '@stores/app.store';
import { ConfigStore } from '@stores/config.store';
import { Provider } from 'mobx-react';

// configure({
//   enforceActions: true
// });

const appStore = new AppStore();
const configStore = new ConfigStore();

ReactDOM.render(
  <Provider appStore={appStore} configStore={configStore}>
    <EntryPoint />
  </Provider>,
  document.getElementById('application-container')
);
