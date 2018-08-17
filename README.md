# Simple state management without dependencies.

### The library utilizes React Context API and creates convenient way to manage state of your application.

---

The idea behind is to create **only one** context per application.
This way you don't need to manage context dependencies between each other.

Imagine you have a regular React app:

```javascript
ReactDOM.render(
  <EntryPoint />,
  document.getElementById('application-container')
);
```

First step you need is to wrap `<EntryPoint />` with a Provider.  
Just like in Redux or any other state management library.

```javascript
ReactDOM.render(
  <Provider>
    <EntryPoint />
  </Provider>,
  document.getElementById('application-container')
);
```


`<Provider />` accepts one parameter called `parts`.  
Kinda like reducers in Redux terminology, or stores in MobX.

```javascript
ReactDOM.render(
  <Provider parts={{ theme, data }}>
    <EntryPoint />
  </Provider>,
  document.getElementById('application-container')
);
```

**Parts** are chunks of the state which are defined manually in any place of the app.  
Trivial example is theme switcher:

```javascript
export const theme = (context: any) => {
  return {
    name: 'light',
    change(name: string) {
      context.setState((prevState: IApplicationState) => {
        return Object.assign(prevState.theme, { name });
      });
    }
  };
};
```

Import `theme` and pass it as a parameter to `parts` object of `Provider`:

```javascript
import { theme } from 'parts/theme';

ReactDOM.render(
  <Provider parts={{ theme }}>
    <EntryPoint />
  </Provider>,
  document.getElementById('application-container')
);
```

---

On the component/controller level we need to `connect` to the parts.  
This is fairly simple and is not different from MobX and Redux.  


Let's take a quick look at entry-point component.

```javascript
export class EntryPoint extends React.Component {
  public render() {
    return (
      <div className='entry-point' />
    );
  }
}
```


We need to import `connect` function from the library
and wrap component with it:
```javascript
import { connect } from '@store/index';

@connect(['theme'])
export class EntryPoint extends React.Component {
  public render() {
    return (
      <div className='entry-point' />
    );
  }
}
```

`connect` decorator accepts array of strings that correspond
to the parts of the app you want to include to the `props` of your component.

Note that parts of the application state you include via `connect` will be
available in `this.props.derived` object.  
this is to distinguish between own component props and those that are part of
application state derived from Provider:

```javascript
@connect(['theme'])
export class EntryPoint extends React.Component {
  public render() {
    const { name, change } = this.props.derived.theme;

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
      </div>
    );
  }
}
```

We're also adding types for convenience
```javascript
interface ITheme {
  name: string;
  change: (name: string) => void;
}

@connect(['theme'])
export class EntryPoint extends React.Component<
  {
    derived?: {
      theme: ITheme;
    };
  },
  null
> {
  public render() {
    const { name, change } = this.props.derived.theme;

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
      </div>
    );
  }
}
```

Let's extend our file with another `part` called `data` (e.g. for managing todo).  
In this case we just retrieve one item from the server.  
In the real world it will be of course less contrived example.

```javascript
export const data = (context: any) => {
  return {
    todo: null,
    fetchTodo(id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response: any) => response.json())
        .then((todo: any) => {
          context.setState((prevState: IApplicationState) => {
            return Object.assign(prevState.data, { todo });
          });
        });
    },
    removeTodo() {
      context.setState((prevState: IApplicationState) => {
        return Object.assign(prevState.data, { todo: null });
      });
    }
  };
};

```

Eventually let's add `data` "dependency" to the component:
```javascript
import { connect } from '@store/index';
import { ButtonComponent as Button } from '@components/button/button-component';

export interface ITheme {
  name: string;
  change: (name: string) => void;
}

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IData {
  todo: ITodo;
  fetchTodo: any;
  removeTodo: any;
}

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

  private renderTodo(todo: ITodo) {
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
  }

  private get className() {
    const { name } = this.props.derived.theme;
    return classnames({
      'entry-point': true,
      'entry-point--light': name === 'light',
      'entry-point--dark': name === 'dark'
    });
  }
}
```
