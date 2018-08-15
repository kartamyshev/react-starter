import * as React from 'react';

export interface IApplicationState {
  theme: string;
}

export const AppContext: React.Context<IApplicationState> = React.createContext(
  null
);
