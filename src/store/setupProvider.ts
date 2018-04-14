import { CounterContext } from './CounterContext';

import {
  increment,
  decrement,
  changeName,
} from './actions';

export const getActionsForChunk = (chunk: string, { context }: any) => {
  switch (chunk) {
    case 'Counter':
      return {
        increment: () => context.setState(increment),
        decrement: () => context.setState(decrement),
      };
  }
};

export const getStateForChunk = (chunk: string) => {
  switch (chunk) {
    case 'Counter':
      return {
        counter: 0,
      };
  }
};

export const getContextForChunk = (chunk: string) => {
  switch (chunk) {
    case 'Counter':
      return CounterContext;
  }
};
