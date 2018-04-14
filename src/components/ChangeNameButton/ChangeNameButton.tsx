import * as React from 'react';
import { withContext } from '@utils/withContext';
import { Fragment } from '@utils/Fragment';
import { Button } from '@components/Button/Button';

@withContext('AppContext')
export class ChangeNameButton extends React.Component<any, any> {
  public render() {
    return (
      <Fragment>
        <Button
          className="button"
          text="Change Name"
          action={this.props.actions.changeName('John')}
        />
        <div style={{ color: 'white' }}>
          { this.props.derived.name }
        </div>
      </Fragment>
    );
  }
}
