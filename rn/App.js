import React from 'react';
import { View, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ConnexionScreen from './src/pages/ConnexionScreen';

const App = () => {
  return (
    <View style={styles.container}>
      <ConnexionScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: wp('1%'),
    margin: hp('1%'),

  },
});

export default App;
