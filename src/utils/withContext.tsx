import * as React from 'react';
import { AppContext } from '@store/AppContext';

export const withContext = (key: any) => (Component: any) => (props: any) => {
  const Context = {
    'AppContext': AppContext
  }[key];
  return <Context.Consumer>
    {(context: any) => {
      return <Component
        own={props}
        derived={context.state}
        actions={context.actions}
      />;
    }}
  </Context.Consumer>;
};
