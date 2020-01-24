import React from 'react';
import { AppRegistry, YellowBox } from 'react-native';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/store/configureStore';
import { StyleProvider, Root } from 'native-base';
import getTheme from './native-base-theme/components';
import platform from './native-base-theme/variables/platform';
import { createAppContainer } from 'react-navigation';
import RootStack from './src/routes/RootStack';

// YellowBox.ignoreWarnings([
//   'Warning: componentWillMount',
//   'Warning: componentWillReceiveProps',
//   'Warning: componentWillUpdate'
// ]);

let Navigation = createAppContainer(RootStack);

const App = () => (
  <Provider store={store}>
    <StyleProvider style={getTheme(platform)}>
      <Root>
        <Navigation />
      </Root>
    </StyleProvider>
  </Provider>
);

AppRegistry.registerComponent(appName, () => App);
