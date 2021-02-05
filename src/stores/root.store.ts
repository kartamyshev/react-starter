import AppStore from '@stores/app.store';
import ConfigStore from '@stores/config.store';

class RootStore {
  public readonly appStore: AppStore;
  public readonly configStore: ConfigStore;

  constructor() {
    this.appStore = new AppStore(this);
    this.configStore = new ConfigStore(this);
  }
}

export default RootStore;
