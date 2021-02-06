import React, { FC } from 'react';
import { observer } from 'mobx-react';
import Button from '@material-ui/core/Button';

import {Theme} from '@stores/config.store';
import {classnames} from '@utils/classnames';
import useStores from '@hooks/useStores';

import './app.component.less';

const App: FC = () => {
  const {
    configStore: {theme, toggleTheme}
  } = useStores();

  const className = classnames({
    'app': true,
    'app--light': theme === Theme.Light,
    'app--dark': theme === Theme.Dark
  });

  return (
    <div className={className}>
      <Button
        variant="contained"
        color="primary"
        onClick={toggleTheme}
      >
        Toggle theme
      </Button>
    </div>
  );
};

export default observer(App);
