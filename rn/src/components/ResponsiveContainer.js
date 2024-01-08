// ResponsiveContainer.js
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const ResponsiveContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: windowWidth > 800 ? 20 : 10,
    marginHorizontal: windowWidth > 800 ? 50 : 20,
    // Ajoutez d'autres styles adaptatifs si nécessaire
  },
});

export default ResponsiveContainer;
