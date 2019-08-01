import { CQLListener } from './CQLListener';

const toHex = (text: string): string => {
  const value = parseInt(text, 10);
  const hex = ('0000' + value.toString(16).toUpperCase()).slice(-4);
  return `\\u${hex}`;
};

export class Listener extends CQLListener {

  private data: string[] = [];

  public enterInit(ctx) {
    this.data.push('"');
  }

  public exitInit(ctx) {
    this.data.push('"');
  }

  public enterValue(ctx) {
    const int = ctx.INT();
    if (int === null) {
      return;
    }
    const value = int.getText();
    this.data.push(toHex(value));
  }

  public get result(): string[] {
    return this.data;
  }
}
