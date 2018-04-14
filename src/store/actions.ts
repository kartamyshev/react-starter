export const clearList = () => {
  return { todos: [] };
};

export const clearValue = () => {
  return { value: '' };
};

export const startFetching = () => {
  return { loading: true };
};

export const endFething = () => {
  return { loading: false };
};

export const addTodo = (text: string) => (prevState: any) => {
  return {
    todos: [...prevState.todos, { id: prevState.todos.length + 1, text }]
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

export const attachPost = (post: any) => (prevState: any) => {
  return { post };
};

export const fetchData = (url: string) => {
  return fetch(url)
    .then((response: any) => response.json())
    .then((data: any) => data);
};
