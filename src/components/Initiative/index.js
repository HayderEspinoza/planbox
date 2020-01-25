import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Thumbnail } from 'native-base';
import { withNavigation } from 'react-navigation';

const Initiative = ({ name, image, navigation, id }) => (
  <TouchableOpacity
    style={styles.container}
    onPress={() => navigation.navigate('Iterations', { id, name })}>
    <Thumbnail source={{ uri: image }} style={styles.image} />
    <Text style={styles.title}>{name}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    width: 140,
    elevation: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginTop: 15,
    backgroundColor: '#fff'
  },
  title: {
    paddingTop: 10,
    textAlign: 'center'
  },
  image: {
    borderWidth: 1,
    borderColor: '#f4f4f4'
  }
});

export default withNavigation(Initiative);
