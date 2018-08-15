import * as React from 'react';
import { IApplicationState } from '@store';

export const connect = Context => Component => (ownProps: any) => {
  return (
    <Context.Consumer>
      {(state: IApplicationState) => {
        const props = { ...ownProps, ...state };
        return <Component {...props} />;
      }}
    </Context.Consumer>
  );
};
