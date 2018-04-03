import * as React from 'react';
import './Sample.less';
import { AppContext } from '@store/AppContext';

export class Sample extends React.Component<null, null> {

  public renderFromContext(context: any) {
    return <div className="sample">
      <div>Hey, I'm a {context.state.app.name}</div>
      <div>Age: {context.state.app.age}</div>
      <button onClick={context.actions.incrementAge}>Increment</button>
      <button onClick={context.actions.decrementAge}>Decrement</button>
    </div>;
  }

  public render() {
    return <AppContext.Consumer>
      { this.renderFromContext }
    </AppContext.Consumer>;
  }
}
