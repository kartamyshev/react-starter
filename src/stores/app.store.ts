import { Language } from './config.store';
import { observable, computed } from 'mobx';

interface IItem {
  id: number;
  finished: boolean;
}

export class AppStore {
  @observable private _data$: IItem[] = [
    { id: 1, finished: false },
    { id: 2, finished: false },
    { id: 3, finished: false },
    { id: 4, finished: true }
  ];

  public constructor() {}

  @computed get dataCount$() {
    return this._data$.filter((item: IItem) => !item.finished).length;
  }

  public initializeData(language: Language) {
    language === 'en'
      ? this._data$.push({ id: 5, finished: false })
      : this._data$.length = 2;
  }

}
