import * as React from 'react';
import { withContext } from '@utils/index';
import { Button } from '@components/Button/Button';

import './TodoList.less';

@withContext('App')
export class TodoList extends React.Component<{
  own?: any;
  derived?: any;
  actions?: any;
}, null> {

  public addTodo = () => {
    const { actions: { addTodo, clearValue }, derived: { value } } = this.props;
    addTodo(value);
    clearValue();
  }

  public clearList = () => {
    const { actions: { clearList, clearValue } } = this.props;
    clearList();
    clearValue();
  }

  public render() {
    const {
      actions,
      derived: { value, todos, loading }
    } = this.props;
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
          action={this.addTodo}
        />
        <Button
          disabled={!todos.length}
          className="button"
          text="Remove All"
          action={this.clearList}
        />
        {
          todos.map((todo: any) => {
            return <div key={todo.id}>
              {todo.id}: {todo.text}
              <Button
                className="button"
                text="x"
                action={() => actions.removeTodo(todo.id) }
              />
            </div>;
          })
        }
      </div>
    );
  }
}
