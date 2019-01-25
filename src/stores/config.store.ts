import { observable, action, computed } from 'mobx';

enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export class ConfigStore {
  @observable private _language$: string = null;
  @observable private _theme$: Theme = Theme.Light;

  public constructor() {
    this.attachLanguage();
  }

  @action.bound
  public toggleTheme() {
    const theme = this.theme$ === Theme.Dark ? Theme.Light : Theme.Dark;
    this.theme$ = theme;
  }

  @computed
  public get theme$(): Theme {
    return this._theme$;
  }
  public set theme$(value: Theme) {
    this._theme$ = value;
  }

  @computed
  public get language$(): string {
    return this._language$;
  }
  public set language$(value: string) {
    this._language$ = value;
  }

  private attachLanguage() {
    this.language$ = Math.random() > .5 ? 'en' : 'de';
  }
}
