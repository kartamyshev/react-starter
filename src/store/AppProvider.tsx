import * as React from 'react';
import { AppContext, IApplicationState } from '../store/AppContext';

import { theme } from './state-parts/theme';
import { size } from './state-parts/size';

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
