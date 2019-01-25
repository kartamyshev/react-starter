import { AppStore } from '@stores/app.store';
import { ConfigStore } from '@stores/config.store';

export const initStores = () => {
  const configStore = new ConfigStore();
  const appStore = new AppStore(configStore);

  return { appStore, configStore };
};
