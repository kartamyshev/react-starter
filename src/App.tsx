import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from '@store/Provider';
import { Counter } from '@components/Counter/Counter';
import '@css/base.less';

ReactDOM.render(
  <Provider>
    <Counter />
  </Provider>,
  document.getElementById('application-container')
);
