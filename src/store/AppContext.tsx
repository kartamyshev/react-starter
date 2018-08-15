import * as React from 'react';

export interface IApplicationState {
  theme: string;
  changeTheme: (name: string) => void;
}

export const AppContext: React.Context<IApplicationState> = React.createContext(
  null
);
