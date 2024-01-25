import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {Fonts} from '../../consts/Fonts';

const MyText = ({
  text,
  fontsize = 14,
  fontWeight,
  color,
  style,
  fontFamily = 'REGULAR',
  center = false,
}) => {
  const getFontFamily = () => {
    const propsFontFamilies = [
      'BLACK',
      'BOLD',
      'EXTRA_BOLD',
      'EXTRA_LIGHT',
      'LIGHT',
      'MEDIUM',
      'REGULAR',
      'SEMIBOLD',
      'THIN',
    ];
    const fontFamilies = Object.values(Fonts);
    const index = propsFontFamilies.findIndex(item => item === fontFamily);
    if (index > -1) return fontFamilies[index];
    return fontFamily;
  };

  const styles = StyleSheet.create({
    textStyle: {
      fontSize: RFValue(fontsize),
      fontWeight: fontWeight,
      color: color,
      fontFamily: getFontFamily(),
    },
  });

  return (
    <Text style={[styles.textStyle, style, center && {textAlign: 'center'}]}>
      {text}
    </Text>
  );
};

export default MyText;
