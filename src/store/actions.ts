export const addTodo = (text: string) => (prevState: any) => {
  return {
    todos: [...prevState.todos, { id: prevState.todos.length + 1, text } ]
  };
};

export const removeTodo = (id: number) => (prevState: any) => {
  return {
    todos: prevState.todos.filter((todo: any) => todo.id !== id)
  };
};

export const changeValue = (value: string) => (prevState: any) => {
  return { value };
};

export const clearList = () => {
  return {
    todos: []
  };
};

export const clearValue = () => {
  return {
    value: ''
  };
};
