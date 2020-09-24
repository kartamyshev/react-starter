import { ConfigStore, IConfigStore } from '@stores/config.store';
import { AppStore, IAppStore } from '@stores/app.store';
import { Container } from 'inversify';
import { TYPES } from './types';

const container = new Container({
  defaultScope: 'Singleton',
});

container.bind<IAppStore>(TYPES.AppStore).to(AppStore);
container.bind<IConfigStore>(TYPES.ConfigStore).to(ConfigStore);

export { container };
