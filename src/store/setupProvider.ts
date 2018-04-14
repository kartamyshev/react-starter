import { AppContext } from './AppContext';

import { addTodo, changeValue, clearValue, removeTodo, clearList } from './actions';

export const getActionsForChunk = (chunk: string, { context }: any) => {
  switch (chunk) {
    case 'App':
      return {
        changeValue: (value: string) => {
          context.setState(changeValue(value));
        },
        addTodo: (text: any) => () => {
          context.setState(addTodo(text));
          context.setState(clearValue);
        },
        removeTodo: (id: number) => () => {
          context.setState(removeTodo(id));
        },
        clearList: () => {
          context.setState(clearList);
        }
      };
  }
};

export const getStateForChunk = (chunk: string) => {
  switch (chunk) {
    case 'App':
      return {
        todos: [],
        value: ''
      };
  }
};

export const getContextForChunk = (chunk: string) => {
  switch (chunk) {
    case 'App':
      return AppContext;
  }
};
