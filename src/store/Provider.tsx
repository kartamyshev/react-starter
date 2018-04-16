import * as React from 'react';
import {
  getContext,
  getInitialState,
  getActions
} from './setupProvider';

export class Provider extends React.Component<null, any> {
  public state = getInitialState();
  public actions = getActions(this);
  public Context = getContext();

  public render() {
    const { state, actions } = this;
    return (
      <this.Context.Provider value={{ state, actions }}>
        { this.props.children }
      </this.Context.Provider>
    );
  }
}
