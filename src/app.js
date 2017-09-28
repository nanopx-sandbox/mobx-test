import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import App from './containers/App/App';
import AppStore from "./RootStore";

// Strict MobX actions
// useStrict(true);

const appStore = new AppStore();

ReactDOM.render(
  <AppContainer>
    <Provider { ...appStore }>
      <App />
    </Provider>
  </AppContainer>,
  document.getElementById('root')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./containers/App/App', () => {
    const NextApp = require('./containers/App/App').default;

    ReactDOM.render(
      <AppContainer>
        <Provider { ...appStore }>
          <NextApp />
          <DevTools />
        </Provider>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
