import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { action, observable, toJS, comparer, computed } from 'mobx';
import { parseLine } from './grammar/parse-line';
import '@css/base.less';

const vars = [
  'const a = 12;' ,
  'var a = 12;',
  'const a = 12;',
  'let a = 12;',
  'const a = 12;',
  'var a = 12;'
];

export class Store {

  // @observable public defaultValue$ = '{ 99, 3, 451 }';
  @observable public defaultValue$ = vars.join(' ');
  @observable private _result$: string[] = parseLine(this.defaultValue$);

  @computed
  public get result$(): string[] {
    return this._result$;
  }
  public set result$(value: string[]) {
    this._result$ = value;
  }

}

interface IProps {
  store: Store;
}

const TestComponent = observer(({ store }: IProps) => {

  const content = Object.keys(store.result$).map((type) => {
    return <div className={'wrap ' + type}>
      {store.result$[type].map(t => <span>{t}</span>)}
    </div>;
  });

  return (
    <React.Fragment>
      <input
        style={{ width: 600, fontSize: 16, height: 30, padding: 10 }}
        type="text"
        defaultValue={store.defaultValue$}
        onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
          store.result$ = parseLine(e.currentTarget.value)
        }
      />
      <div>{content}</div>
    </React.Fragment>
  );
});

ReactDOM.render(
  <TestComponent store={new Store()} />,
  document.getElementById('application-container')
);
