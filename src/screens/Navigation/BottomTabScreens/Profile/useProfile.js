import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import COLORS from '../../../../consts/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CommmonProfile = ({iconName, UserInfo, iconLibrary, color, onPress}) => {
  let IconComponent;
  switch (iconLibrary) {
    case 'Feather':
      IconComponent = Feather;
      break;
    case 'Ionicons':
      IconComponent = Ionicons;
      break;
    case 'MaterialIcons':
      IconComponent = MaterialIcons;
      break;
    case 'MaterialCommunityIcons':
      IconComponent = MaterialCommunityIcons;
      break;
    case 'FontAwesome':
      IconComponent = FontAwesome;
      break;
    default:
      IconComponent = Feather; // Default to Feather if no library specified
  }

  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: responsiveHeight(2),
      }}
      onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        <IconComponent name={iconName} size={26} color={color} />
        <Text
          style={{
            paddingLeft: responsiveWidth(3),
            color: COLORS.dark,
            fontSize: responsiveFontSize(2),
            fontWeight: '400',
          }}>
          {UserInfo}
        </Text>
      </View>
      <View style={styles.circleArrow}>
        <Feather name={'chevron-right'} size={24} color={COLORS.grey} />
      </View>
    </TouchableOpacity>
  );
};

export default CommmonProfile;

const styles = StyleSheet.create({
  circleArrow: {
    width: responsiveWidth(7),
    height: responsiveWidth(7),
    borderRadius: responsiveWidth(3.5),
    backgroundColor: COLORS.light,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 0.1,
    shadowColor: '#000',
    elevation: 2,
  },
});
