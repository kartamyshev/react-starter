import * as React from 'react';
import './Counter.less';
import { AppContext } from '@store/AppContext';
import { Button } from '@components/Button/Button';

export class Counter extends React.Component<null, null> {

  public renderWithContext(context: any) {
    return <div className="counter">
      <div className="counter-title">Value: {context.state.counter}</div>
      { context.state.name }
      <div>
        <Button
          disabled={context.state.counter === 0}
          className="button"
          text="-"
          action={context.actions.decrement}
        />
        <Button
          disabled={context.state.counter === 10}
          className="button"
          text="+"
          action={context.actions.increment}
        />
        <Button
          className="button"
          text="Change Name"
          action={context.actions.changeName('John')}
        />
      </div>
    </div>;
  }

  public render() {
    return <AppContext.Consumer>
      { this.renderWithContext }
    </AppContext.Consumer>;
  }
}
