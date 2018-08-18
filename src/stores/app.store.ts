import { ConfigStore } from '@stores/config.store';
import { observable, computed, action } from 'mobx';

interface ITodo {
  id: number;
  finished: boolean;
}

export class AppStore {
  public configStore: ConfigStore;

  @observable public todos: ITodo[] = [];
  public constructor(configStore) {
    this.configStore = configStore;
    this.initializeTodosArray();
  }

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

  private initializeTodosArray() {
    const todos = [
      { id: 1, finished: true },
      { id: 2, finished: false },
      { id: 3, finished: false },
      { id: 4, finished: false }
    ];
    this.configStore.language$ === 'en'
      ? todos.push({ id: 5, finished: true })
      : todos.length = 2;
    this.todos = todos;
  }

}
