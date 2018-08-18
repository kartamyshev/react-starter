import { observable, action } from 'mobx';

export class ConfigStore {
  @observable public language$: string = null;
  @observable public theme$: 'light' | 'dark' = 'light';

  public constructor() {
    this.attachLanguage();
  }

  @action.bound
  public toggleTheme() {
    this.theme$ = this.theme$ === 'dark' ? 'light' : 'dark';
  }

  private attachLanguage() {
    this.language$ = Math.random() > .5 ? 'en' : 'de';
  }
}
