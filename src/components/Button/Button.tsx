import * as React from 'react';
import './Button.less';

export const Button = ({
  text,
  action,
  className,
  disabled,
}: {
  text: string,
  action: () => void,
  className: string,
  disabled?: boolean
}) => {
  return <button
    disabled={disabled}
    className={className}
    onClick={action}>
    { text }
  </button>;
};
