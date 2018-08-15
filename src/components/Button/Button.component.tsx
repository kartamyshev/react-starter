import * as React from 'react';
import { AppContext, connect } from '@store';

@connect(AppContext)
export class Button extends React.Component<any, null> {
  public render() {
    return <button>{this.props.theme}</button>;
  }
}
