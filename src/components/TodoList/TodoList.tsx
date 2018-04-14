import * as React from 'react';
import { withContext } from '@utils/withContext';
import { Button } from '@components/Button/Button';

import './TodoList.less';

@withContext('App')
export class TodoList extends React.Component<{
  own?: any;
  derived?: any;
  actions?: any;
}, null> {
  public render() {
    const { actions, derived: { value, todos } } = this.props;
    return (
      <div className="todo-list">
        <input
          type="text"
          onChange={(e: any) => actions.changeValue(e.target.value)}
          value={value}
        />
        <Button
          disabled={value === ''}
          className="button"
          text="Add Todo"
          action={actions.addTodo(value)}
        />
        <Button
          disabled={!todos.length}
          className="button"
          text="Remove All"
          action={actions.clearList}
        />
        {
          todos.map((todo: any) => {
            return <div key={todo.id}>
              {todo.id}: {todo.text}
              <Button
                className="button"
                text="x"
                action={actions.removeTodo(todo.id)}
              />
            </div>;
          })
        }
      </div>
    );
  }
}
