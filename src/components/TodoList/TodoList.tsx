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

  public fetchData = () => {
    const {
      startFetching,
      fetchData,
      endFething,
      attachPost
    } = this.props.actions;

    startFetching();
    fetchData()
      .then((post: any) => {
        endFething();
        attachPost(post);
    });
  }

  public render() {
    const {
      actions,
      derived: { value, todos, loading, post }
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
          action={actions.addTodo(value)}
        />
        <Button
          disabled={!todos.length}
          className="button"
          text="Remove All"
          action={actions.clearList}
        />
        <Button
          disabled={false}
          className="button"
          text="Fetch Data"
          action={this.fetchData}
        />
        <div>
          { !post && 'Post will appear here' }
          { post && post.body }
        </div>
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
