import { observable, computed, action } from 'mobx';

export class AppStore {
  @observable public todos = [
    { id: 1, finished: true },
    { id: 2, finished: false },
    { id: 3, finished: false },
    { id: 4, finished: false }
  ];

  @computed get unfinishedTodoCount() {
    return this.todos.filter((todo: any) => !todo.finished).length;
  }

  @action public clearTodoList = () => {
    this.todos = [];
  }

  @action public toggleFinished = (todo) => {
    const index = this.todos.indexOf(todo);
    this.todos[index].finished = !this.todos[index].finished;
  }

}
