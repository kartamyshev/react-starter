import { Language } from './config.store';
import { observable, computed } from 'mobx';

interface IItem {
  id: number;
  finished: boolean;
}

interface IAppStore {
  dataCount$: number;
  initializeData(language: Language): void;
}

export class AppStore implements IAppStore {
  @observable private _data$: IItem[] = [
    { id: 1, finished: false },
    { id: 2, finished: false },
    { id: 3, finished: false },
    { id: 4, finished: true }
  ];

  public constructor() {}

  @computed
  public get dataCount$() {
    return this._data$.filter((item: IItem) => !item.finished).length;
  }

  public initializeData(language: Language) {
    language === 'en'
      ? this._data$.push({ id: 5, finished: false })
      : this._data$.length = 2;
  }

}
