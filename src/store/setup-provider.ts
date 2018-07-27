import * as React from 'react';
import { mapActionsWithoutParams, mapActionsWithParams } from '@utils/index';

const AppContext = React.createContext();

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

export const getActions = (context: any) => {
  const actionsWithoutParams = mapActionsWithoutParams({
    startFetching,
    endFething,
    clearList,
    clearValue
  }, context);
  const actionsWithParams = mapActionsWithParams({
    addTodo,
    attachPost,
    removeTodo,
    changeValue
  }, context);
  const asyncActions = {
    fetchPost: () => fetchData('https://jsonplaceholder.typicode.com/posts/1')
  };

  return {
    ...actionsWithoutParams,
    ...actionsWithParams,
    ...asyncActions
  };
};

export const getInitialState = () => {
  return { todos: [], value: '', loading: false, post: null };
};

export const getContext = () => {
  return AppContext;
};
