import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConnexionScreen from './src/pages/ConnexionScreen';
import HomeScreen from './src/pages/HomeScreen';
import DrawerNavigation from './src/components/DrawerNavigation';
import * as Animatable from 'react-native-animatable';

const Stack = createNativeStackNavigator();

// Fonction pour animer chaque lettre
const AnimateLetter = ({ letter, delay }) => (
  <Animatable.Text
    animation={{
      from: { rotate: '0deg', translateX: 0 },
      to: { rotate: '360deg', translateX: 10 },
    }}
    iterationCount="infinite"
    direction="alternate"
    delay={delay}
    style={{ fontSize: 20, color: 'black' }}
  >
    {letter}
  </Animatable.Text>
);

// Composant pour le titre animé
const AnimatedHeaderTitle = () => {
  const title = 'WorkSocial';
  return (
    <View style={{ flexDirection: 'row' }}>
      {title.split('').map((letter, index) => (
        <AnimateLetter
          key={index}
          letter={letter}
          delay={index * 100}
        />
      ))}
    </View>
  );
};

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Connexion" component={ConnexionScreen} />
          <Stack.Screen
            name="HomePrincipal"
            component={DrawerNavigation}
            options={{
              headerBackVisible: false,
              headerTitle: props => <AnimatedHeaderTitle {...props} />
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
