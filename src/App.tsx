import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from '@store/Provider';
import { TodoList } from '@components/TodoList/TodoList';
import { Posts } from '@components/Posts/Posts';
import { Fragment } from '@utils/Fragment';
import '@css/base.less';

ReactDOM.render(
  <Fragment>
    <Provider chunk="App">
      <TodoList />
    </Provider>
    <hr/>
    <Provider chunk="Posts">
      <Posts />
    </Provider>
  </Fragment>,
  document.getElementById('application-container')
);
