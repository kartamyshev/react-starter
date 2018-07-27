import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from '@store/Provider';
import { TodoList } from '@components/TodoList/TodoList';
import '@css/base.less';

ReactDOM.render(
  <Provider>
    <TodoList />
  </Provider>,
  document.getElementById('application-container')
);
