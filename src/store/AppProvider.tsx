import * as React from 'react';
import { AppContext, IApplicationState } from '@store/AppContext';

import { theme } from './state-parts/theme';
import { data } from './state-parts/data';

export class AppProvider extends React.Component<any, IApplicationState> {
  public state = {
    // remove context dependency
    theme: theme.call(null, this),
    data: data.call(null, this)
  };

  public render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
