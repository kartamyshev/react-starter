import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from '@store/Provider';
import { EntryPoint } from '@components/entry-point';

import '@css/base.less';

import { theme } from './store/state-parts/theme';
import { data } from './store/state-parts/data';

ReactDOM.render(
  <Provider parts={{ theme, data }}>
    <EntryPoint />
  </Provider>,
  document.getElementById('application-container')
);
