import * as React from 'react';
import { observer } from 'mobx-react';
import { Button } from '../stateless/button.component';

@observer
export class EntryPoint extends React.Component<
  {
    foo?: string;
  },
  null
> {
  public render() {
    return (
      <div>
        <h1>Heading 1</h1>
        <h1>Heading 2</h1>
        <Button />
        {this.props.children}
      </div>
    );
  }
}
