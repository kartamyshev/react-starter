import { observable, action, computed } from 'mobx';
import axios from 'axios';

export class ConfigStore {
  @observable public language$: string = null;
  @observable public theme$: 'light' | 'dark' = 'light';

  public constructor() {
    this.attachLanguage();
  }

  @action.bound
  public async toggleTheme() {
    const theme = this.theme$ === 'dark' ? 'light' : 'dark';
    const { data: themeName } = await axios.post('http://localhost:3000/toggleTheme', { theme });

    this.updateTheme(themeName);
  }

  @action.bound private updateTheme(name) {
    this.theme$ = name;
  }

  private attachLanguage() {
    this.language$ = Math.random() > .5 ? 'en' : 'de';
  }
}
