import { IApplicationState } from '@store/interfaces';

export const data = (context: any) => {
  return {
    todo: null,
    fetchTodo(id) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then((response: any) => response.json())
        .then((todo: any) => {
          context.setState((prevState: IApplicationState) => {
            return Object.assign(prevState.data, { todo });
          });
        });
    },
    removeTodo() {
      context.setState((prevState: IApplicationState) => {
        return Object.assign(prevState.data, { todo: null });
      });
    }
  };
};
