import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default SearchBar = ({ searchTerm, onSearchTermChange, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter at least 3 characters"
        value={searchTerm}
        onChangeText={onSearchTermChange}
      />
      <Button title="Search" onPress={onSearch} disabled={searchTerm.trim().length < 3} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 5,
  },
});