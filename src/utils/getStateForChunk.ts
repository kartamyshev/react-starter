import { CounterContext } from '@store/CounterContext';

export const getStateForChunk = (chunk: string) => {
  switch (chunk) {
    case 'Counter':
      return {
        counter: 0,
      };
  }
};
