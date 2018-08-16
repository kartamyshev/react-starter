import * as React from 'react';
import { AppContext } from '@store';

export const connect = (part: string) => (Component: any) => (
  ownProps: any
) => {
  return (
    <AppContext.Consumer>
      {(state: any) => {
        return <Component derived={state[part]} own={ownProps} />;
      }}
    </AppContext.Consumer>
  );
};
