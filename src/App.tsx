import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppProvider } from '@store';
import { EntryPoint } from '@components/entry-point';

import '@css/base.less';

ReactDOM.render(
  <AppProvider>
    <EntryPoint />
  </AppProvider>,
  document.getElementById('application-container')
);
