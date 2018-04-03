import * as React from 'react';
import { AppContext } from '@store/AppContext';
import { app } from '@store/state';
import { increment, decrement } from '@store/actions';

export class Provider extends React.Component<any, any> {
  public state = { app };

  public render() {
    const value = {
      state: this.state,
      actions: {
        increment: () => this.setState(increment),
        decrement: () => this.setState(decrement)
      }
    };
    return (
      <AppContext.Provider value={value}>
        { this.props.children }
      </AppContext.Provider>
    );
  }
}
