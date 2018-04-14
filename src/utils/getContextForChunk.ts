import { CounterContext } from '@store/CounterContext';

export const getContextForChunk = (key: string) => {
  switch (key) {
    case 'Counter':
      return CounterContext;
  }
};
