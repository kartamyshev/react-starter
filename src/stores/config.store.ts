import { observable, action, computed } from 'mobx';

export enum Theme {
  Light = 'light',
  Dark = 'dark',
}

export enum Language {
  En = 'en',
  De = 'de'
}

export class ConfigStore {
  @observable private _language$: Language = null;
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
  public get language$(): Language {
    return this._language$;
  }
  public set language$(value: Language) {
    this._language$ = value;
  }

  private attachLanguage() {
    const language = Math.random() > .5 ? Language.En : Language.De;
    this.language$ = language;
  }
}
