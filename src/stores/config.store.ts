import { observable, action } from 'mobx';

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export class ConfigStore {
  @observable public language$: string = null;
  @observable public theme$: Theme = Theme.Light;

  public constructor() {
    this.attachLanguage();
  }

  @action.bound
  public async toggleTheme() {
    this.theme$ = this.theme$ === Theme.Dark ? Theme.Light : Theme.Dark;
  }

  private attachLanguage() {
    this.language$ = Math.random() > .5 ? 'en' : 'de';
  }
}
