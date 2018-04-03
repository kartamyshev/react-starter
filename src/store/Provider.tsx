import * as React from 'react';
import { AppContext } from '@store/AppContext';
import { app } from '@store/state';
import { incrementAge, decrementAge } from '@store/actions';

export class Provider extends React.Component<any, any> {
  public state = { app };

  public render() {
    const value = {
      state: this.state,
      actions: {
        incrementAge: () => this.setState(incrementAge),
        decrementAge: () => this.setState(decrementAge)
      }
    };
    return (
      <AppContext.Provider value={value}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
