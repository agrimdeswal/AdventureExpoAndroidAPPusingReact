import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MainScreen = ({ navigation }) => {
  const handleNewDestinationPress = () => {
    navigation.navigate('NewDestination');
  };

  const handleDestinationsPress = () => {
    navigation.navigate('Destination');
  };

  const handleAboutPress = () => {
    navigation.navigate('About');
  };

    {/* Main Screen Options to choose from */}
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleNewDestinationPress}>
        <Text style={styles.buttonText}>New destination</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDestinationsPress}>
        <Text style={styles.buttonText}>List destinations</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleAboutPress}>
        <Text style={styles.buttonText}>About me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#eaeaea',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
  },
});

export default MainScreen;
