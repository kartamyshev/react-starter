import * as React from 'react';

export const withContext = (Context: any) => (Component: any) => (props: any) => {
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
