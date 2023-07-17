import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Text>Respectful self-motivated gifted finding reliable quick solution for issues. Aspiring yet hardworking in software
      development field. Fluent in English, Hindi and accustomed to work with cross cultural, global teams.
      </Text>
      
     {/* Display Vanier logo directly from web */}
      <Image
        style={styles.logo}
        source={{
          uri: 'https://www.vaniercollege.qc.ca/wp-content/themes/vaniermain/images/logo.png',
        }}
      />

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
  logo: {
    width: 300,
    height: 100,
    backgroundColor: '#556b2f',
  },
});

export default AboutScreen;
