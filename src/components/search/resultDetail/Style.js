// import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    marginLeft: wp(3),
  },
  image: {
    width: wp(75),
    height: hp(17),
    borderRadius: 4,
    marginBottom: wp(2),
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
