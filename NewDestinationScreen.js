import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewDestinationScreen = () => {
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [note, setNote] = useState('');
  const navigation = useNavigation();

  {/* Fetch data from API */}
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://api.zippopotam.us/${country}/${state}/${city}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch places.');
      }
      const data = await response.json();
      setPlaces(data.places);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePlacePress = (place) => {
    setSelectedPlace(place);
    setNote('');
  };

  const handleAddNote = () => {
    const destination = {
      place: selectedPlace,
      note: note,
    };
    navigation.navigate('ListDestinations', { destination });
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>New Destination</Text>
      <TextInput
        style={styles.input}
        placeholder="Country"
        value={country}
        onChangeText={setCountry}
      />
      <TextInput
        style={styles.input}
        placeholder="State"
        value={state}
        onChangeText={setState}
      />
      <TextInput
        style={styles.input}
        placeholder="City"
        value={city}
        onChangeText={setCity}
      />
      <Button title="Search" onPress={handleSearch} />
      <View style={styles.placesContainer}>
        {places.map((place, index) => (
          <Button
            key={index}
            title={place['place name']}
            onPress={() => handlePlacePress(place)}
          />
        ))}
      </View>
      {/* Note functionality only visible after selecting place*/}
      {selectedPlace && (
        <View style={styles.noteContainer}>
          <Text style={styles.noteTitle}>Add Note</Text>
          <Text style={styles.selectedPlaceText}>
            {selectedPlace['place name']}
          </Text>
          <TextInput
            style={styles.noteInput}
            placeholder="Enter a short note"
            value={note}
            onChangeText={setNote}
          />
          <Button title="Save" onPress={handleAddNote} />
        </View>
      )}
    </View>
    </ScrollView>
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  placesContainer: {
    marginTop: 16,
  },
  noteContainer: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
  },
  noteTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  selectedPlaceText: {
    fontSize: 16,
    marginBottom: 8,
  },
  noteInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 8,
    paddingHorizontal: 8,
  },
});

export default NewDestinationScreen;
