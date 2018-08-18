import { observable, computed } from 'mobx';

export class AppStore {
  @observable public todos = [
    { id: 1, finished: true },
    { id: 2, finished: false },
    { id: 3, finished: false },
    { id: 4, finished: false }
  ];
  @computed get unfinishedTodoCount() {
      return this.todos.filter((todo) => !todo.finished).length;
  }
}
