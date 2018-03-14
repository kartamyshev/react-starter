import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Fragment } from 'react';
import { Sample } from '@components/Sample/Sample'
import '@css/base.less';

ReactDOM.render(
  <Fragment>
    <Sample />
  </Fragment>,
  document.getElementById('application-container')
);
