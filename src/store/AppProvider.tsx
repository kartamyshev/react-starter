import * as React from 'react';
import { AppContext, IApplicationState } from '../store/AppContext';

const theme = context => {
  return {
    name: 'light',
    change: (name: string) => {
      context.setState((prevState: any) => {
        return Object.assign(prevState.theme, { name });
      });
    }
  };
};

const size = {
  width: 200,
  height: 30
};

export class AppProvider extends React.Component<any, IApplicationState> {
  public state = {
    theme: theme.call(null, this),
    size: size
  };

  public render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
