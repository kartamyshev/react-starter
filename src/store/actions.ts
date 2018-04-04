export const increment = (prevState: any) => {
  return {
    ...prevState,
    counter: prevState.counter + 1
  };
};

export const decrement = (prevState: any) => {
  return {
    ...prevState,
    counter: prevState.counter - 1
  };
};

export const changeName = (name: string) => (prevState: any) => {
  return {
    ...prevState,
    name
  };
};
