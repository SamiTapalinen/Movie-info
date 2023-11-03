import React from 'react';
import { FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default MovieList = ({ data, onMoviePress }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.imdbID}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.movieItem} onPress={() => onMoviePress(item)}>
          <Text>{item.Title}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  movieItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});