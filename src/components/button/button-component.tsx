import * as React from 'react';
import { ISize, connect } from '../../store';

@connect(['size'])
export class ButtonComponent extends React.Component<
  {
    derived?: {
      size: ISize;
    };
    label: string;
    disabled: boolean;
    onClick: () => void;
  },
  null
> {
  public render() {
    const { width, height } = this.props.derived.size;
    const { label, disabled, onClick } = this.props;

    return (
      <button style={{ width, height }} disabled={disabled} onClick={onClick}>
        {label}
      </button>
    );
  }
}
