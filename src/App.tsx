import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AppProvider } from '@store/AppProvider';
import { Button } from '@components/Button';

import '@css/base.less';

ReactDOM.render(
  <AppProvider>
    <Button />
  </AppProvider>,
  document.getElementById('application-container')
);
