import {View, Text} from 'react-native';
import React, {useState} from 'react';
import useResult from '../../../Hooks/useResult';

//COMPONENTS
import SearchBar from '../../../components/search/SearchBar';
import ResultList from '../results/ResultList';
import styles from './Style';

//DECLARATION UseState
const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResult();

  const filterResultsByPrice = price => {
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}

      <ResultList
        results={filterResultsByPrice('$')}
        title="Cost Effective"
        navigation={navigation}
      />
      <ResultList
        results={filterResultsByPrice('$$')}
        title="Bit Pricer"
        navigation={navigation}
      />
      <ResultList
        results={filterResultsByPrice('$$$')}
        title="Big Spender"
        navigation={navigation}
      />
    </View>
  );
};

export default SearchScreen;
