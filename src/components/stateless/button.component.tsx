import * as React from 'react';
import { classnames } from '../../utils';
import { ConfigStore } from '../../stores/config.store';
import { inject } from 'mobx-react';

export interface IButtonProps {
  disabled: boolean;
  configStore?: ConfigStore;
}

// @inject('configStore')
export class Button extends React.Component<IButtonProps, {}> {
  public static defaultProps: IButtonProps = {
    disabled: false
  };

  public static get label(): string {
    return 'Button';
  }

  public render() {
    const { disabled } = this.props;
    const className = classnames({ button: true, disabled });

    return <button className={className}>{Button.label}</button>;
  }
}
