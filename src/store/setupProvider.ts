import { AppContext } from './AppContext';

import {
  addTodo,
  changeValue,
  clearValue,
  removeTodo,
  clearList,
  startFetching,
  endFething,
  attachPost
} from './actions';

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
        },
        startFetching: () => {
          context.setState(startFetching);
        },
        endFething: () => {
          context.setState(endFething);
        },
        attachPost: (post: any) => {
          context.setState(attachPost(post));
        },
        fetchData: () => {
          return fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response: any) => response.json())
            .then((post: any) => {
              return post;
            });
        }
      };
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
