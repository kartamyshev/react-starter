import * as React from 'react';

export const withDefaultProps = (defaultProps: any) => (Component: any): any => (ownProps: any) => {
  const props = { ...defaultProps, ...ownProps };
  return <Component {...props} />;
}
