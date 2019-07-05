import { observable, action, computed } from 'mobx';
import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

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
  public async toggleTheme() {
    const value = this.theme$ === Theme.Dark ? Theme.Light : Theme.Dark;
    const newValue = await axios.post(`${BASE_URL}/toggleTheme`, { value });

    this.theme$ = newValue.data;
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
