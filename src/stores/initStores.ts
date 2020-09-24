import { IAppStore } from '@stores/app.store';
import { IConfigStore } from '@stores/config.store';
import { container } from '@ioc/inversify.config';
import { TYPES } from '@ioc/types';

export const initStores = () => {
  const appStore = container.get<IAppStore>(TYPES.AppStore);
  const configStore = container.get<IConfigStore>(TYPES.ConfigStore);

  return { appStore, configStore };
};
