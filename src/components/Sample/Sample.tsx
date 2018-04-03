import * as React from 'react';
import './Sample.less';
import { Context } from '@store/createContext';

export class Sample extends React.Component<null, null> {

  public renderFromContext(context: any) {
    return <div className="sample">
      <div>Hey, I'm a {context.state.name}</div>
      <div>Age: {context.state.age}</div>
      <button onClick={context.actions.incrementAge}>Increment</button>
    </div>;
  }

  public render() {
    return <Context.Consumer>
      { this.renderFromContext }
    </Context.Consumer>;
  }
}
