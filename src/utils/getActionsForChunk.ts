import {
  increment,
  decrement,
  changeName,
} from '@store/actions';

export const getActionsForChunk = (chunk: string, { context }: any) => {
  switch (chunk) {
    case 'Counter':
      return {
        increment: () => context.setState(increment),
        decrement: () => context.setState(decrement),
      };
  }
};
