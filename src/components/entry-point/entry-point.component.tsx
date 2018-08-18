import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { AppStore } from '@stores/app.store';
import { ConfigStore } from '@stores/config.store';
import { TodoItem } from '@components/TodoItem';

@inject('appStore', 'configStore')
@observer
export class EntryPoint extends React.Component<
  {
    appStore?: AppStore;
    configStore?: ConfigStore;
  },
  any
> {
  public render() {
    const {
      toggleFinished,
      clearTodoList,
      unfinishedTodoCount,
      todos
    } = this.props.appStore;

    return (
      <div>
        <ul>
          {todos.map((todo: any) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={() => toggleFinished(todo)}
            />
          ))}
        </ul>
        Tasks left: {unfinishedTodoCount}
        <button onClick={clearTodoList}>Clear List</button>
      </div>
    );
  }
}
