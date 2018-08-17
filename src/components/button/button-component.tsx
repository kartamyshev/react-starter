import * as React from 'react';
import { ITheme, ISize, connect } from '../../store';

@connect(['theme', 'size'])
export class ButtonComponent extends React.Component<
  {
    derived?: {
      theme: ITheme;
      size: ISize;
    };
    themeName: string;
    label: string;
    disabled: boolean;
  },
  any
> {
  public render() {
    const { change } = this.props.derived.theme;
    const { width, height } = this.props.derived.size;
    const { themeName, label, disabled } = this.props;

    return (
      <button
        style={{ width, height }}
        disabled={disabled}
        onClick={() => change(themeName)}
      >
        {label}
      </button>
    );
  }
}
