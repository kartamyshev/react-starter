import * as React from 'react';
import { Context } from '@store/createContext';

export class Provider extends React.Component<any, any> {

  public state = {
    name: 'Konstantin',
    age: 32,
    cool: true
  };

  public incrementAge = () => {
    this.setState({
      age: this.state.age + 1
    });
  }

  private get actions() {
    return {
      incrementAge: this.incrementAge
    };
  }

  public render() {
    const value = {
      state: this.state,
      actions: this.actions
    };
    return <Context.Provider value={value}>
      { this.props.children }
    </Context.Provider>;
  }
}
