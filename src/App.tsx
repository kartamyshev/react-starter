import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from './here-is-the-library-name/Provider';
import { EntryPoint } from '@components/entry-point';
import { theme, data, IApplicationState } from './store';

import '@css/base.less';

const AppContext: React.Context<IApplicationState> = React.createContext(null);

ReactDOM.render(
  <Provider context={AppContext} parts={{ theme, data }}>
    <EntryPoint />
  </Provider>,
  document.getElementById('application-container')
);
