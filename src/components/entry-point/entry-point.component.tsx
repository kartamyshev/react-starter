import * as React from 'react';
import { observer } from 'mobx-react';
import { AppStore } from '@stores/app.store';
import { TodoItem } from '@components/TodoItem';

@observer
export class EntryPoint extends React.Component<
  {
    stores: {
      appStore: AppStore;
    };
  },
  any
> {
  public render() {
    return (
      <div>
        <ul>
          {this.props.stores.appStore.todos.map((todo: any) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
        Tasks left: {this.props.stores.appStore.unfinishedTodoCount}
      </div>
    );
  }
}
