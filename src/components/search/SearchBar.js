import {TextInput, View} from 'react-native';
import React from 'react';
// import {Feather} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';

//COMPONENTS
import styles from './Style';

const SearchBar = props => {
  return (
    <View style={styles.backgroundStyle}>
      <Icon
        style={styles.iconStyle}
        name="search"
        type="Feather"
        color="#887700"
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={props.term}
        onChangeText={props.onTermChange}
        onEndEditing={props.onTermSubmit}
      />
    </View>
  );
};

export default SearchBar;
