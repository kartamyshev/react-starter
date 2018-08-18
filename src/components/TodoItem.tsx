import * as React from 'react';
import { observer } from 'mobx-react';

@observer
export class TodoItem extends React.Component<any, any> {
  public render() {
    const { todo, onChange } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.finished}
          onChange={() => onChange(todo)}
        />
        {todo.title}
      </li>
    );
  }
}
