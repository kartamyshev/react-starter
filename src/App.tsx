import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from '@store/Provider';
import { Counter } from '@components/Counter/Counter';
import { ChangeNameButton } from '@components/ChangeNameButton/ChangeNameButton';

import '@css/base.less';

ReactDOM.render(
  <Provider chunk="AppContext">
    <Counter />
    <ChangeNameButton />
  </Provider>,
  document.getElementById('application-container')
);
