import * as React from 'react';
import { ITheme, IData } from '@store/interfaces';

export interface IApplicationState {
  theme?: ITheme;
  data?: IData;
}

export const AppContext: React.Context<IApplicationState> = React.createContext(
  null
);
