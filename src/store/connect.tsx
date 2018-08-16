import * as React from 'react';
import { AppContext } from '@store';

export const connect = (parts: string[]) => (Component: any) => (
  ownProps: any
) => {
  return (
    <AppContext.Consumer>
      {(state: any) => {
        const derived = parts.reduce((agg, part) => {
          agg[part] = state[part];
          return agg;
        }, {});
        return <Component derived={derived} own={ownProps} />;
      }}
    </AppContext.Consumer>
  );
};
