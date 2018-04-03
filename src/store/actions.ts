export const increment = (prevState: any) => {
  return {
    app: {
      ...prevState.app,
      counter: prevState.app.counter + 1
    }
  };
};

export const decrement = (prevState: any) => {
  return {
    app: {
      ...prevState.app,
      counter: prevState.app.counter - 1
    }
  };
};
