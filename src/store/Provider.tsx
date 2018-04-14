import * as React from 'react';
import { AppContext } from '@store/AppContext';
import { increment, decrement, changeName } from '@store/actions';

export class Provider extends React.Component<{
  chunk: string;
}, any> {

  public state = {
    counter: 0,
    name: 'Mike'
  };

  public render() {
    const value = {
      state: this.state,
      actions: this.actions
    };
    let Context = {
      'AppContext': AppContext
    }[this.props.chunk];

    return (
      <Context.Provider value={value}>
        { this.props.children }
      </Context.Provider>
    );
  }

  private get actions() {
    if (this.props.chunk === 'AppContext') {
      return {
        increment: () => this.setState(increment),
        decrement: () => this.setState(decrement),
        changeName: (name: any) => () => {
          this.setState(changeName(name));
        }
      };
    }

  }
}
