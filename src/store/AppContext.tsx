import * as React from 'react';

export interface ITheme {
  name: string;
  change: (name: string) => void;
}

export interface ISize {
  width: number;
  height: number;
}

export interface IApplicationState {
  theme?: ITheme;
  size?: ISize;
}

export const AppContext: React.Context<IApplicationState> = React.createContext(
  null
);
