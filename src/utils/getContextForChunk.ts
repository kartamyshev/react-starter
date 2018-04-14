import { CounterContext } from '@store/CounterContext';

export const getContextForChunk = (chunk: string) => {
  switch (chunk) {
    case 'Counter':
      return CounterContext;
  }
};
