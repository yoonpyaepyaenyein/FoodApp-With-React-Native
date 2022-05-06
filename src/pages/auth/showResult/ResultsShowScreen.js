import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Style';
import yelp from '../../../api/yelp';

const ResultsShowScreen = ({route, navigation}) => {
  const [result, setResult] = useState(null);
  const {id} = route.params;
  console.log(result);

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({item}) => {
          return <Image style={styles.image} source={{uri: item}} />;
        }}
      />
    </View>
  );
};

export default ResultsShowScreen;
