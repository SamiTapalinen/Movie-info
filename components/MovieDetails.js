import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default MovieDetails = ({ movie }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.Title}</Text>
      {movie.Poster && <Image source={{ uri: movie.Poster }} style={styles.poster} />}
      <Text>Year: {movie.Year}</Text>
      <Text>Type: {movie.Type}</Text>
      <Text>IMDb ID: {movie.imdbID}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  poster: {
    width: '75%',
    height: '50%',
  },
});