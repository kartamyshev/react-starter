import {observable, action, computed, makeObservable} from 'mobx';
import axios, {AxiosResponse} from 'axios';
import RootStore from '@stores/root.store';

declare const BASE_URL: string;
declare const APP_VERSION: string;

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

interface IConfigStore {
  theme: Theme;
  toggleTheme(): void;
  initializeTheme(): void;
}

export default class ConfigStore implements IConfigStore {
  @observable private _theme: Theme = Theme.Light;

  public constructor(private readonly _rootStore: RootStore) {
    makeObservable(this);
    this.initializeTheme();
  }

  @action.bound
  public async toggleTheme() {
    const value = this.theme === Theme.Dark ? Theme.Light : Theme.Dark;
    axios
      .post(`${BASE_URL}/toggleTheme`, {value})
      .then(({data}: AxiosResponse) => {
        this.theme = data;
      });
  }

  @action.bound
  public async initializeTheme() {
    axios
      .get(`${BASE_URL}/getTheme?currentValue=${this.theme}`)
      .then(({data}: AxiosResponse) => {
        this.theme = data;
      });
  }

  @computed
  public get theme(): Theme {
    return this._theme;
  }
  public set theme(value: Theme) {
    this._theme = value;
  }
}
