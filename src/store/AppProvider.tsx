import * as React from 'react';
import { AppContext, IApplicationState } from '../store/AppContext';

export class AppProvider extends React.Component<any, IApplicationState> {
  public state = {
    theme: 'light',
    changeTheme: name => {
      this.setState(prevState => {
        return { theme: name };
      });
    }
  };

  public render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
