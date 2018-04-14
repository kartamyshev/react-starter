import * as React from 'react';
import { AppContext } from '@store/AppContext';
import { withContext } from '@utils/withContext';

@withContext(AppContext)
export class AnotherComponent extends React.Component<{
  own?: any;
  derived?: any;
  actions?: any;
  name?: string;
}, null> {
  public render() {
    return <div>
      <hr />
      { this.props.derived.counter } <br />
      Name from own props: { this.props.own.name } <br />
      Name from context: { this.props.derived.name }
    </div>;
  }
}
