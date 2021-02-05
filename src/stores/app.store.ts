import RootStore from '@stores/root.store';

interface IAppStore {}

export default class AppStore implements IAppStore {

  public constructor(
    private readonly _rootStore: RootStore,
  ) {}

}
