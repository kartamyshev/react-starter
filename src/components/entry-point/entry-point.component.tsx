import * as React from 'react';
import { connect } from '@store/index';
import { classnames } from '@utils/classnames';
import { ButtonComponent as Button } from '@components/button/button-component';

import { ITheme } from '@store/state-parts/theme';
import { IData } from '@store/state-parts/data';

import './entry-point.component.less';

@connect(['theme', 'data'])
export class EntryPoint extends React.Component<
  {
    derived?: {
      theme: ITheme;
      data: IData;
    };
  },
  null
> {
  public render() {
    const { name, change } = this.props.derived.theme;
    const { todo, removeTodo } = this.props.derived.data;

    return (
      <div className={this.className}>
        <Button
          onClick={() => change('dark')}
          disabled={name === 'dark'}
          label="Dark"
        />
        <Button
          onClick={() => change('light')}
          disabled={name === 'light'}
          label="Light"
        />
        <br />
        <br />
        <Button
          disabled={todo !== null}
          onClick={this.fetchTodo}
          label="Fetch Todo"
        />
        <Button
          disabled={todo === null}
          onClick={removeTodo}
          label="Remove Todo"
        />
        <br />
        {todo ? this.renderTodo(todo) : 'No todo available'}
      </div>
    );
  }

  private renderTodo(todo: any) {
    return (
      <div>
        userId - {todo.userId}
        <br />
        id - {todo.id}
        <br />
        title - {todo.title}
        <br />
        completed - {todo.completed.toString()}
        <br />
      </div>
    );
  }

  private fetchTodo = () => {
    this.props.derived.data.fetchTodo(1);
  };

  private get className() {
    const { name } = this.props.derived.theme;
    return classnames({
      'entry-point': true,
      'entry-point--light': name === 'light',
      'entry-point--dark': name === 'dark'
    });
  }
}
