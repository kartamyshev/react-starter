import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Sample } from 'components/Sample';
import 'css/base.less';

ReactDOM.render(
  <Fragment>
    <Sample />
  </Fragment>,
  document.getElementById('application-container')
);
