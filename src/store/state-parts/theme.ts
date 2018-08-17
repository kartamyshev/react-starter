export const theme = (context: any) => {
  return {
    name: 'light',
    change: (name: string) => {
      context.setState((prevState: any) => {
        return Object.assign(prevState.theme, { name });
      });
    }
  };
};
