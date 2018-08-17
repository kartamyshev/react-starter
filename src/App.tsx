import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from './here-is-the-library-name/Provider';
import { EntryPoint } from '@components/entry-point';
import { theme, data } from '@store/parts';

import { IApplicationState } from '@store/interfaces';

import '@css/base.less';

const AppContext: React.Context<IApplicationState> = React.createContext(null);

ReactDOM.render(
  <Provider context={AppContext} parts={{ theme, data }}>
    <EntryPoint />
  </Provider>,
  document.getElementById('application-container')
);
