import { observable, computed } from 'mobx';
import { inject, injectable } from 'inversify';
import { ConfigStore } from '@stores/config.store';
import { TYPES } from '@ioc/types';

interface IItem {
  id: number;
  finished: boolean;
}

export interface IAppStore {
  dataCount$: number;
  initializeData(): void;
}

@injectable()
export class AppStore implements IAppStore {

  // @inject(TYPES.ConfigStore) private _configStore: ConfigStore;
  private _configStore: ConfigStore;

  @observable private _data$: IItem[] = [
    { id: 1, finished: false },
    { id: 2, finished: false },
    { id: 3, finished: false },
    { id: 4, finished: true }
  ];

  public constructor(
    @inject(TYPES.ConfigStore) configStore: ConfigStore,
  ) {
    this._configStore = configStore;
  }

  @computed
  public get dataCount$() {
    return this._data$.filter((item: IItem) => !item.finished).length;
  }

  public initializeData() {
    const { language$ } = this._configStore;

    language$ === 'en'
      ? this._data$.push({ id: 5, finished: false })
      : this._data$.length = 2;
  }

}
