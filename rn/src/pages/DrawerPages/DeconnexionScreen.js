import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DeconnexionScreen = ({ navigation }) => {
  const confirmLogout = () => {
    Alert.alert(
      "Déconnexion",
      "Êtes-vous sûr de vouloir vous déconnecter ?",
      [
        // Bouton pour annuler sans se déconnecter
        {
          text: "Annuler",
          onPress: () => navigation.navigate('HomePrincipal'),
          style: "cancel"
        },
        // Bouton pour confirmer et se déconnecter
        {
          text: "Se déconnecter",
          onPress: () => handleLogout()
        },
      ],
      { cancelable: true } // Permet à l'utilisateur d'annuler en tapant en dehors de l'alerte
    );
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('@jwtToken');
      await AsyncStorage.removeItem('@userEmail');
      await AsyncStorage.removeItem('@userPassword');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert("Erreur", "Problème lors de la déconnexion.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Déconnexion</Text>
      <Button title="Se déconnecter" onPress={confirmLogout} />
    </View>
  );
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
