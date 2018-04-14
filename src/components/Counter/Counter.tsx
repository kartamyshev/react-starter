import * as React from 'react';
import { withContext } from '@utils/withContext';
import { AppContext } from '@store/AppContext';
import { Button } from '@components/Button/Button';

import './Counter.less';

@withContext(AppContext)
export class Counter extends React.Component<{
  own?: any;
  derived?: any;
  actions?: any;
}, null> {
  public render() {
    return (
      <div className="counter">
        <div className="counter-title">Value: {this.props.derived.counter}</div>
        {this.props.derived.name}
        <div>
          <Button
            disabled={this.props.derived.counter === 0}
            className="button"
            text="-"
            action={this.props.actions.decrement}
          />
          <Button
            disabled={this.props.derived.counter === 10}
            className="button"
            text="+"
            action={this.props.actions.increment}
          />
          <Button
            className="button"
            text="Change Name"
            action={this.props.actions.changeName('John')}
          />
        </div>
      </div>
    );
  }
}
