import { observable } from 'mobx';

export class ConfigStore {
  @observable public language$: string = 'en';
}
