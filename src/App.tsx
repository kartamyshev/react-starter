import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { EntryPoint } from '@components/entry-point';
import { AppStore } from '@stores/app.store';

const appStore = new AppStore();

ReactDOM.render(
  <EntryPoint stores={{ appStore }} />,
  document.getElementById('application-container')
);
