import * as React from 'react';
import { AppContext } from '@store/AppContext';
import { increment, decrement, changeName } from '@store/actions';

export class Provider extends React.Component<any, any> {

  public state = {
    counter: 0,
    name: 'Mike'
  };

  public render() {
    const value = {
      state: this.state,
      actions: {
        increment: () => this.setState(increment),
        decrement: () => this.setState(decrement),
        changeName: (name: any) => () => {
          this.setState(changeName(name));
        }
      }
    };
    return (
      <AppContext.Provider value={value}>
        { this.props.children }
      </AppContext.Provider>
    );
  }
}
