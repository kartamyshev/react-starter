import * as React from 'react';
import { ITheme } from '@store/state-parts/theme';
import { IData } from '@store/state-parts/data';

export interface IApplicationState {
  theme?: ITheme;
  data?: IData;
}

export const AppContext: React.Context<IApplicationState> = React.createContext(
  null
);
