// import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: wp(3),
    marginBottom: wp(1),
  },
  container: {
    marginBottom: hp(2),
  },
});

export default styles;
