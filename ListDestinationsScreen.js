import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

{/* Passing Data from NewDestination.js to ListDestination.js using useRoute*/}
const ListDestinationsScreen = () => {
  const route = useRoute();
  const { destination } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Destinations</Text>
      <Text style={styles.placeText}>
        Selected Place: {destination.place['place name']}
      </Text>
      <Text style={styles.noteText}>Note: {destination.note}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  placeText: {
    fontSize: 16,
    marginBottom: 8,
  },
  noteText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ListDestinationsScreen;
