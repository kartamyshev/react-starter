import {useContext} from 'react';
import {MobXProviderContext} from 'mobx-react';

import RootStore from '@stores/root.store';
import AppStore from '@stores/app.store';
import ConfigStore from '@stores/config.store';

export interface IStoresContext {
  rootStore: RootStore;
  appStore: AppStore;
  configStore: ConfigStore;
}

const useStores = (): IStoresContext => useContext<any>(MobXProviderContext);

export default useStores;
