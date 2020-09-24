import * as React from 'react';
import 'reflect-metadata';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import { EntryPoint } from '@components/entry-point';
import { initStores } from '@stores/initStores';

import '@css/base.less';

configure({
  enforceActions: 'observed'
});

ReactDOM.render(
  <Provider {...initStores()}>
    <EntryPoint />
  </Provider>,
  document.getElementById('application-container')
);
