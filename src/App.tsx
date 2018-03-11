import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Sample } from './components/Sample/Sample';
import { Fragment } from './utils/Fragment';
import 'css/base.less';

ReactDOM.render(
  <Fragment>
    <Sample ololoev={false} name="Kostya" />
  </Fragment>,
  document.getElementById('application-container')
);
