import * as React from 'react';

export class ButtonComponent extends React.Component<
  {
    label: string;
    disabled?: boolean;
    onClick: () => void;
  },
  null
> {
  public componentDidMount() {}

  public render() {
    const { label, disabled, onClick } = this.props;

    return (
      <button
        style={{ width: 200, height: 30 }}
        disabled={disabled}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
}
