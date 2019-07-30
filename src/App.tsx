import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { observer } from 'mobx-react';
import { parseLine } from './grammar/parse-line';

export class Store {
  public changeValue(value: string) {
    const result = parseLine(value);
  }
}

const TestComponent = observer(({ store }) => {
  const defaultValue = 'cpcc=("C04B28/02" prox/unit=sentence ("C04B28/04", "DE", "US", "ES"))';
  return (
    <input
      style={{ width: 600, fontSize: 16, height: 30, padding: 10 }}
      type="text"
      defaultValue={defaultValue}
      onChange={(e: React.SyntheticEvent<HTMLInputElement>) =>
        store.changeValue(e.currentTarget.value)
      }
    />
  );
});

ReactDOM.render(
  <TestComponent store={new Store()} />,
  document.getElementById('application-container')
);
