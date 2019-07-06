import { observable, action, computed } from 'mobx';
import axios, { AxiosResponse } from 'axios';

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
    this.initializeTheme();
  }

  @action.bound
  public async toggleTheme() {
    const value = this.theme$ === Theme.Dark ? Theme.Light : Theme.Dark;

    axios.post(`${BASE_URL}/toggleTheme`, { value })
      .then(({ data }: AxiosResponse) => {
        this.theme$ = data;
      });
  }

  @action.bound
  public async initializeTheme() {
    axios.get(`${BASE_URL}/getTheme?currentValue=${this.theme$}`)
      .then(({ data }: AxiosResponse) => {
        this.theme$ = data;
      });
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
