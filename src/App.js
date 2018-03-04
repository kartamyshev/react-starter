import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Sample } from './components/Sample/Sample';
import './css/base.css';

ReactDOM.render(
  <Fragment>
    <Sample />
  </Fragment>,
  document.getElementById('application-container')
);
