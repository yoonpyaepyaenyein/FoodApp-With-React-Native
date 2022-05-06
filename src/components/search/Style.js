// import React from 'react';
import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: hp(2),
    backgroundColor: '#F0EEEE',
    height: hp(7),
    borderRadius: wp(2),
    marginHorizontal: wp(5),
    flexDirection: 'row',
    marginBottom: hp(1),
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: wp(5),
  },
});

export default styles;
