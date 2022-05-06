import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

//Components
import ResultDetail from '../../../components/search/resultDetail/ResultDetail';
import styles from './Style';

const ResultList = props => {
  if (!props.results.length) {
    return null;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.results}
        keyExtractor={result => result.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate('ResultsShow', {id: item.id})
              }>
              <ResultDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default ResultList;
