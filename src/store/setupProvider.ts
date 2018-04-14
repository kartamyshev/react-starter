import { AppContext } from './AppContext';
import { PostsContext } from './PostsContext';
import { mapActionsWithoutParams, mapActionsWithParams } from '@utils/index';

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
  let actionsWithoutParams: any;
  let actionsWithParams: any;
  let asyncActions: any;

  switch (chunk) {
    case 'App':
      actionsWithoutParams = mapActionsWithoutParams({ clearList, clearValue }, context);
      actionsWithParams = mapActionsWithParams({ addTodo, removeTodo, changeValue }, context);
      return { ...actionsWithoutParams, ...actionsWithParams, ...asyncActions };
    case 'Posts':
      actionsWithoutParams = mapActionsWithoutParams({ startFetching, endFething }, context);
      actionsWithParams = mapActionsWithParams({ attachPost }, context);
      asyncActions = { fetchData };
      return { ...actionsWithoutParams, ...actionsWithParams, ...asyncActions };
    default:
      return {};
  }
};

export const getStateForChunk = (chunk: string) => {
  switch (chunk) {
    case 'App': return { todos: [], value: '', loading: false };
    case 'Posts': return { loading: false, post: null };
    default: return {};
  }
};

export const getContextForChunk = (chunk: string) => {
  switch (chunk) {
    case 'App': return AppContext;
    case 'Posts': return PostsContext;
    default: throw new Error('PLease specify chunk of the Provider');
  }
};
