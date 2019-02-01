import { ConfigStore } from '@stores/config.store';
import { observable, computed } from 'mobx';

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

  public constructor(
    private configStore: ConfigStore
  ) {
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
