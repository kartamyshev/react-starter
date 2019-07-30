import { CQLListener } from './CQLListener';

export class Listener extends CQLListener {

  public enterParse(ctx) {
    // console.log(ctx.getText());
    // this._theme = ctx.getText();
  }
  public exitParse(ctx) {
    // console.log('exitParse ->', ctx.getText());
  }

  public enterParenthesisStatement(ctx) {
    // console.log('enterParenthesisStatement ->', ctx.getText());
  }

  public enterProxOperand(ctx) {
    const [
      value,
      ...compareTo
    ] = ctx.value().map((val) => val.getText());
    console.log({ value }, compareTo);
  }

  public get result() {
    return undefined;
  }
}
