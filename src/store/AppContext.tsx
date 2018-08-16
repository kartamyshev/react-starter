import * as React from 'react';

interface ITheme {
  name: string;
  change: (name: string) => void;
}

export interface IApplicationState {
  theme: ITheme;
}

export const AppContext: React.Context<IApplicationState> = React.createContext(
  null
);
