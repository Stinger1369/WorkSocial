// index.js
import React from 'react'; // Import React package

import {AppRegistry, StyleSheet} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

// Add display name to the component definition
const RootComponent = () => (
  <GestureHandlerRootView style={styles.root}>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => RootComponent); // Use the RootComponent as the registered component
