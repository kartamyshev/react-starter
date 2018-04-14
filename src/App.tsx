import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from '@store/Provider';
import { Fragment } from '@utils/Fragment';
import { Counter } from '@components/Counter/Counter';
import { ChangeNameButton } from '@components/ChangeNameButton/ChangeNameButton';

import '@css/base.less';

ReactDOM.render(
  <Fragment>
    <Provider chunk="Counter">
      <Counter />
    </Provider>
  </Fragment>,
  document.getElementById('application-container')
);
