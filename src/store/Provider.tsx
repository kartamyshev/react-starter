import * as React from 'react';
import { AppContext, IApplicationState } from '@store/AppContext';

export class Provider extends React.Component<
  {
    parts: any;
  },
  IApplicationState
> {
  public state = this.initializeState();

  public render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }

  private initializeState() {
    const { parts } = this.props;
    return Object.keys(parts).reduce((state, part) => {
      state[part] = parts[part].call(null, this);
      return state;
    }, {});
  }
}
