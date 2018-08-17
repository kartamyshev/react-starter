interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface IData {
  todo: ITodo;
  fetchTodo: any;
  removeTodo: any;
}

export const data = (context: any) => {
  return {
    todo: null,
    fetchTodo(id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response: any) => response.json())
        .then((todo: any) => {
          context.setState((prevState: any) => {
            return Object.assign(prevState.data, { todo });
          });
        });
    },
    removeTodo() {
      context.setState((prevState: any) => {
        return Object.assign(prevState.data, { todo: null });
      });
    }
  };
};
