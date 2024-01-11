import React from 'react';
import {View, StyleSheet} from 'react-native';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ConnexionScreen from './src/pages/ConnexionScreen';
import HomeScreen from './src/pages/HomeScreen';
import InscriptionScreen from './src/pages/InscriptionScreen/InscriptionScreen';
import DrawerNavigation from './src/components/DrawerNavigation';
import * as Animatable from 'react-native-animatable';
import PropTypes from 'prop-types';

const Stack = createNativeStackNavigator();

// Fonction pour animer chaque lettre
const AnimateLetter = ({letter, delay}) => (
  <Animatable.Text
    animation={{
      from: {rotate: '0deg', translateX: 0},
      to: {rotate: '360deg', translateX: 10},
    }}
    iterationCount="infinite"
    direction="alternate"
    delay={delay}
    style={styles.letterStyle}>
    {letter}
  </Animatable.Text>
);

AnimateLetter.propTypes = {
  letter: PropTypes.string.isRequired,
  delay: PropTypes.number.isRequired,
};

const AnimatedHeaderTitle = () => {
  const title = 'WorkSocial';
  return (
    <View style={styles.row}>
      {title.split('').map((letter, index) => (
        <AnimateLetter key={index} letter={letter} delay={index * 100} />
      ))}
    </View>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Connexion" component={ConnexionScreen} />
          <Stack.Screen
            name="InscriptionScreen"
            component={InscriptionScreen}
          />

          <Stack.Screen
            name="HomePrincipal"
            component={DrawerNavigation}
            options={{
              headerBackVisible: false,
              headerTitle: props => <AnimatedHeaderTitle {...props} />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  letterStyle: {
    fontSize: 20,
    color: 'black',
  },
  row: {
    flexDirection: 'row',
  },
});
export default App;
