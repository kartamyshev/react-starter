import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { configure } from 'mobx';
import { Provider } from 'mobx-react';

import { EntryPoint } from './components/entry-point';
import { initStores } from './stores/initStores';

configure({
  enforceActions: true
});

ReactDOM.render(
  <Provider {...initStores()}>
    <EntryPoint />
  </Provider>,
  document.getElementById('application-container')
);
