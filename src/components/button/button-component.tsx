import * as React from 'react';
import { ITheme, ISize, connect } from '@store';

// own?: {
//   themeName: string;
//   label: string;
//   disabled: boolean
// };
// derived?: {
//   theme: ITheme;
//   size: ISize;
// };

@connect(['theme', 'size'])
export class ButtonComponent extends React.Component<any, any> {
  public render() {
    const { change } = this.props.derived.theme;
    const { width, height } = this.props.derived.size;
    const { themeName, label, disabled } = this.props.own;

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
