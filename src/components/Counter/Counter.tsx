import * as React from 'react';
import './Counter.less';
import { AppContext } from '@store/AppContext';
import { Button } from '@components/Button/Button';

export class Counter extends React.Component<null, null> {

  public renderFromContext(context: any) {
    return <div className="counter">
      <div className="counter-title">Value: {context.state.app.counter}</div>
      <div>
        <Button
          disabled={context.state.app.counter === 0}
          className="button"
          text="-"
          action={context.actions.decrement}
        />
        <Button
          disabled={context.state.app.counter === 10}
          className="button"
          text="+"
          action={context.actions.increment}
        />
      </div>
    </div>;
  }

  public render() {
    return <AppContext.Consumer>
      { this.renderFromContext }
    </AppContext.Consumer>;
  }
}
