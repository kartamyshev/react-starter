import * as React from 'react';
import { getContextForChunk } from '@store/setupProvider';

export const withContext = (chunk: any) => (Component: any) => (props: any) => {
  const Context = getContextForChunk(chunk);

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
