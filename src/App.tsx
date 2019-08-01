import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';
import { parseLine } from './grammar/parse-line';

export class Store {

  @observable public result$: string[] = [];

  @action.bound
  public changeValue(value: string) {
    this.result$ = parseLine(value);
  }
}

interface IProps {
  store: Store;
}

const TestComponent = observer(({ store }: IProps) => {
  const defaultValue = '{ 99, 3, 451 }';
  return (
    <React.Fragment>
      <input
        style={{ width: 600, fontSize: 16, height: 30, padding: 10 }}
        type="text"
        defaultValue={defaultValue}
        onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
          store.changeValue(e.currentTarget.value)
        }
      />
      {
        store.result$.map((result: string) => {
          return <div>{result}</div>;
        })
      }
    </React.Fragment>
  );
});

ReactDOM.render(
  <TestComponent store={new Store()} />,
  document.getElementById('application-container')
);
