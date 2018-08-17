// theme interface
export interface ITheme {
  name: string;
  change: (name: string) => void;
}

// data interface
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

// rest interfaces here
