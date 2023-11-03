import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MovieDetails from '../components/MovieDetails';

export default MovieDetailsScreen = ({ navigation, route }) => {
  const { selectedMovie } = route.params;

  return (
    <View style={styles.container}>
      <MovieDetails movie={selectedMovie} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
});