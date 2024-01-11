import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import PropTypes from 'prop-types'; // Import PropTypes

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenue sur notre application !</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Connexion')}>
        <Text style={styles.buttonText}>Connexion</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('InscriptionScreen')}>
        <Text style={styles.linkText}>Pas de compte ? Inscrivez-vous</Text>
      </TouchableOpacity>
    </View>
  );
};

// Define PropTypes
HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    backgroundColor: '#0066ff',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  linkText: {
    color: '#0066ff',
    marginTop: 15,
  },
});

export default HomeScreen;
