import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';

const API_KEY = '74a2f143';

export default SearchScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const saveSearchQueryResponse = async (query, results) => {
    try {
      if (results && results.length > 0) {
        const storedQueries = await AsyncStorage.getItem('searchQueries');
        const queries = storedQueries ? JSON.parse(storedQueries) : [];

        queries.push({ query, results });
        await AsyncStorage.setItem('searchQueries', JSON.stringify(queries));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getSearchResultsFromStorage = async () => {
    try {
      const storedQueries = await AsyncStorage.getItem('searchQueries');
      const queries = storedQueries ? JSON.parse(storedQueries) : [];

      const queryObject = queries.find((item) => item.query === searchTerm);
      return queryObject ? queryObject.results : [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const isInvalidSearchTerm = (term) => {
    return term.trim().length < 3;
  };

  const searchMovies = async () => {
    setLoading(true);

    const localResults = await getSearchResultsFromStorage();

    if (localResults.length > 0) {
      setSearchResults(localResults);
      setLoading(false);
      return;
    }

    if (isInvalidSearchTerm(searchTerm)) {
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(`http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
      const apiResults = response.data.Search || [];

      setSearchResults(apiResults);

      saveSearchQueryResponse(searchTerm, apiResults);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setSearchPerformed(true);
    }
  };

  useEffect(() => {
    getSearchResultsFromStorage().then((results) => {
      if (results.length > 0) {
        setSearchResults(results);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <SearchBar
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
        onSearch={searchMovies}
      />
      {loading ? <Text>Loading...</Text> : searchResults.length > 0 ? (
        <MovieList data={searchResults} onMoviePress={(item) => navigation.navigate('MovieDetails', { selectedMovie: item })} />
      ) : (
        searchPerformed ? <Text>No results found.</Text> : ''
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});