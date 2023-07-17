import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NewApp = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://api.zippopotam.us/CA/QC/Montreal')
      .then((response) => response.json())
      .then((responseData) => setData(responseData))
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}></Text>
      {data ? (
        <View>
          <Text>Country: {data.country}</Text>
          <Text>State: {data.state}</Text>
          <Text>City: {data.city}</Text>
        </View>
      ) : (
        <Text>Loading data...</Text>
      )}
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
});

export default NewApp;
