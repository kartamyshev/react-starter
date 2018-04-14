import * as React from 'react';
import { withContext } from '@utils/withContext';
import { Button } from '@components/Button/Button';

import './Counter.less';

@withContext('Counter')
export class Counter extends React.Component<{
  own?: any;
  derived?: any;
  actions?: any;
}, null> {
  public render() {
    return (
      <div className="counter">
        <div className="counter-title">Value: {this.props.derived.counter}</div>
        <div>
          <Button
            disabled={this.props.derived.counter === 0}
            className="button"
            text="-"
            action={this.props.actions.decrement}
          />
          <Button
            disabled={this.props.derived.counter > 9}
            className="button"
            text="+"
            action={this.props.actions.increment}
          />
        </div>
      </div>
    );
  }
}
