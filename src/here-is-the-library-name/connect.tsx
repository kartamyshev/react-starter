import * as React from 'react';
import { Context } from './Provider';

export const connect = (parts: string[]) => (Component: any) => (
  ownProps: any
) => {
  return (
    <Context.Consumer>
      {(state: any) => {
        const derived = parts.reduce((agg, part) => {
          agg[part] = state[part];
          return agg;
        }, {});
        return <Component derived={derived} {...ownProps} />;
      }}
    </Context.Consumer>
  );
};
