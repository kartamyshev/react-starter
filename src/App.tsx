import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from '@store/Provider';
import { Counter } from '@components/Counter/Counter';
import { AnotherComponent } from '@components/AnotherComponent/AnotherComponent';
import '@css/base.less';

ReactDOM.render(
  <Provider>
    <Counter />
    <AnotherComponent name="Linda" />
  </Provider>,
  document.getElementById('application-container')
);
