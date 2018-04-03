import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from '@store/Provider';
import { Sample } from '@components/Sample/Sample';
import '@css/base.less';

ReactDOM.render(
  <Provider>
    <Sample />
  </Provider>,
  document.getElementById('application-container')
);
