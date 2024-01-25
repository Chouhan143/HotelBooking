import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import COLORS from '../../../../consts/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import userProfileImg from '../../../../assets/userImag.jpg';
import Divider from 'react-native-divider';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const PersonalInfo = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.light,
        paddingHorizontal: responsiveWidth(5),
      }}>
      <View style={styles.commonStyle}>
        <View style={styles.userImage}>
          <Image
            source={userProfileImg}
            style={{
              width: responsiveWidth(30),
              height: responsiveWidth(30),
            }}
            resizeMode="center"
          />
        </View>
        <View style={{paddingLeft: responsiveWidth(5)}}>
          <Text style={styles.userName}>Johan Bulla</Text>
          <Text style={styles.userSubHeading}>Johan@gmail.com</Text>
        </View>

        <TouchableOpacity
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
          onPress={() => navigation.navigate('EditProfile')}>
          {/* <AntDesign name={'edit'} size={26} color={COLORS.orange} /> */}
          <Text
            style={{
              color: '#006d77',
              fontSize: responsiveFontSize(3),
              fontWeight: '800',
            }}>
            Edit
          </Text>
        </TouchableOpacity>
      </View>

      <Divider
        borderColor={COLORS.grey}
        orientation="center"
        color={COLORS.grey}>
        I love Indore
      </Divider>

      <View
        style={{
          flexDirection: 'row',
          marginLeft: responsiveWidth(8),
          alignItems: 'center',
          marginTop: responsiveHeight(3),
        }}>
        <Feather name={'user'} size={35} color="#006d77" />
        <View style={{paddingLeft: responsiveWidth(3)}}>
          <Text style={styles.textCommon}>Full Name</Text>
          <Text style={styles.textCommon}>Johan</Text>
        </View>
      </View>

      {/* Email */}

      <View
        style={{
          flexDirection: 'row',
          marginLeft: responsiveWidth(8),
          alignItems: 'center',
          marginTop: responsiveHeight(3),
        }}>
        <Feather name={'mail'} size={35} color="#e27396" />
        <View style={{paddingLeft: responsiveWidth(3)}}>
          <Text style={styles.textCommon}>Email</Text>
          <Text style={styles.textCommon}>Johan@gmail.com</Text>
        </View>
      </View>
      {/* phone */}
      <View
        style={{
          flexDirection: 'row',
          marginLeft: responsiveWidth(8),
          alignItems: 'center',
          marginTop: responsiveHeight(3),
        }}>
        <Feather name={'phone'} size={35} color="#386641" />
        <View style={{paddingLeft: responsiveWidth(3)}}>
          <Text style={styles.textCommon}>Phone</Text>
          <Text style={styles.textCommon}>78698585525</Text>
        </View>
      </View>
    </View>
  );
};

export default PersonalInfo;

const styles = StyleSheet.create({
  userImage: {
    width: responsiveWidth(30),
    height: responsiveWidth(30),
    borderRadius: responsiveWidth(15),
    backgroundColor: COLORS.dark,
    overflow: 'hidden',
  },
  commonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: responsiveFontSize(3),
    fontWeight: '800',
    color: COLORS.dark,
  },
  userSubHeading: {
    fontSize: responsiveFontSize(2),
    fontWeight: '500',
    color: COLORS.grey,
  },

  textCommon: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '500',
    color: COLORS.dark,
  },
});
