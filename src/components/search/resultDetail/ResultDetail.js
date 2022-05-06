import styles from './Style';
import {View, Text, Image} from 'react-native';
import React from 'react';

const ResultDetail = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: props.result.image_url}} />
      <Text style={styles.name}>{props.result.name}</Text>
      <Text>
        {props.result.rating} Stars, {props.result.review_count} Reviews
      </Text>
    </View>
  );
};

export default ResultDetail;
