import { AppContext } from './AppContext';
import { mapActionsWithoutParams, mapActionsWithParams } from '@utils';

import {
  clearList,
  clearValue,
  startFetching,
  endFething,
  addTodo,
  changeValue,
  removeTodo,
  attachPost,
  fetchData,
} from './actions';

export const getActionsForChunk = (chunk: string, { context }: any) => {
  switch (chunk) {
    case 'App':
    const actionsWithoutParams: any = mapActionsWithoutParams(
      { clearList, clearValue, startFetching, endFething },
      context
    );
    const withParams = mapActionsWithParams({
      addTodo, removeTodo, changeValue, attachPost
    }, context);
    const asyncActions: any = { fetchData };

    return { ...actionsWithoutParams, ...withParams, ...asyncActions };
  }
};

export const getStateForChunk = (chunk: string) => {
  switch (chunk) {
    case 'App':
      return {
        todos: [],
        value: '',
        loading: false
      };
  }
};

export const getContextForChunk = (chunk: string) => {
  switch (chunk) {
    case 'App':
      return AppContext;
  }
};
