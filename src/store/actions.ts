export const incrementAge = (prevState: any) => {
  return {
    app: {
      ...prevState.app,
      age: prevState.app.age + 1
    }
  };
};

export const decrementAge = (prevState: any) => {
  return {
    app: {
      ...prevState.app,
      age: prevState.app.age - 1
    }
  };
};
