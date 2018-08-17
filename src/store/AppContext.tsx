import * as React from 'react';

export interface ITheme {
  name: string;
  change: (name: string) => void;
}

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IData {
  todo: ITodo;
  fetchTodo: any;
  removeTodo: any;
}

export interface IApplicationState {
  theme?: ITheme;
  data?: IData;
}

export const AppContext: React.Context<IApplicationState> = React.createContext(
  null
);
