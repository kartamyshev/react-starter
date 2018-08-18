import * as React from 'react';
import { observer } from 'mobx-react';

export const TodoItem = observer(({ todo }) => (
  <li>
    <input
      type="checkbox"
      checked={todo.finished}
      onChange={() => (todo.finished = !todo.finished)}
    />
    {todo.title}
  </li>
));
