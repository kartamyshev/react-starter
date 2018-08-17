export interface ITodo {
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
