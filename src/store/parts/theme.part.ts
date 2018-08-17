import { IApplicationState } from '@store/interfaces';

export const theme = (context: any) => {
  return {
    name: 'light',
    change(name: string) {
      context.setState((prevState: IApplicationState) => {
        return Object.assign(prevState.theme, { name });
      });
    }
  };
};
