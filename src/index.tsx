import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {configure} from 'mobx';
import {Provider} from 'mobx-react'; // mobx-react-lite
import RootStore from '@stores/root.store';

import App from './components/app';
import '@css/base.less';

configure({enforceActions: 'always'});
const rootStore = new RootStore();

ReactDOM.render(
  <Provider
    rootStore={rootStore}
    appStore={rootStore.appStore}
    configStore={rootStore.configStore}
  >
    <App />
  </Provider>,
  document.getElementById('application-container')
);

/**
 * TODO:
 * - material ui
 * - eslint
 * - router service
 */
