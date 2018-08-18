import { ConfigStore } from '@stores/config.store';
import { observable, computed, action } from 'mobx';

interface IData {
  id: number;
}

export class AppStore {
  @observable public data: IData[] = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 }
  ];
  private configStore: ConfigStore;

  public constructor(configStore) {
    this.configStore = configStore;
    this.initializeData();
  }

  @computed get dataCount() {
    return this.data.filter((item: any) => !item.finished).length;
  }

  private initializeData() {
    this.configStore.language$ === 'en'
      ? this.data.push({ id: 5 })
      : this.data.length = 2;
  }

}
