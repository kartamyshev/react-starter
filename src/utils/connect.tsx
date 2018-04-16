import * as React from 'react';
import { getContext, getActions } from '@store/setupProvider';

export const connect = (options?: any) => (Component: any) => (props: any) => {
  const Context = getContext();

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
