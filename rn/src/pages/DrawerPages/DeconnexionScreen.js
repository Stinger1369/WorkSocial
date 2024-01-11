import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomAlert from '../../components/AlertButton';
import PropTypes from 'prop-types';

const DeconnexionScreen = ({navigation}) => {
  const [alertVisible, setAlertVisible] = useState(false);

  const confirmLogout = () => {
    setAlertVisible(true);
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@jwtToken');
      await AsyncStorage.removeItem('@userEmail');
      await AsyncStorage.removeItem('@userPassword');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erreur', 'Problème lors de la déconnexion.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Déconnexion</Text>
      <Button title="Se déconnecter" onPress={confirmLogout} />

      <CustomAlert
        visible={alertVisible}
        message="Êtes-vous sûr de vouloir vous déconnecter ?"
        onConfirm={() => {
          handleLogout();
          setAlertVisible(false);
        }}
        onCancel={() => {
          navigation.navigate('HomePrincipal');
          setAlertVisible(false);
        }}
      />
    </View>
  );
};
// Define PropTypes
DeconnexionScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default DeconnexionScreen;
