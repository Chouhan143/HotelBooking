import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import COLORS from '../../../../consts/colors';
import userProfileImg from '../../../../assets/userImag.jpg';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EditProfile = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.light}}>
      <View style={styles.commonStyle}>
        <Image
          source={userProfileImg}
          style={styles.userImage}
          resizeMode="center"
        />
        <TouchableOpacity style={styles.editIcon}>
          <FontAwesome name={'edit'} size={26} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {/* Input field  */}
      <View
        style={{
          marginHorizontal: responsiveWidth(5),
          marginTop: responsiveHeight(3),
        }}>
        <View>
          <Text style={styles.textHeading}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your full name"
            placeholderTextColor="#999"
            // You can add other TextInput props as needed
          />
        </View>

        <View>
          <Text style={styles.textHeading}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Email"
            placeholderTextColor="#999"
            // You can add other TextInput props as needed
          />
        </View>

        <View>
          <Text style={styles.textHeading}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#999"
            // You can add other TextInput props as needed
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            color: COLORS.white,
            fontWeight: '800',
          }}>
          Update
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  userImage: {
    width: responsiveWidth(34),
    height: responsiveWidth(34),
    borderRadius: responsiveWidth(17),
    backgroundColor: COLORS.dark,
    overflow: 'hidden',
  },
  commonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    justifyContent: 'center',
  },
  editIcon: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(6),
    backgroundColor: 'green',
    borderWidth: 0.5,
    position: 'absolute',
    bottom: responsiveHeight(0),
    left: responsiveWidth(56),
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: responsiveFontSize(2),
    marginBottom: 5,
    color: '#333',
  },
  input: {
    height: responsiveHeight(7),
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: responsiveWidth(3),
    marginBottom: 20,
    color: '#333',
    backgroundColor: COLORS.light,
    // You can add more styles as needed
  },
  button: {
    width: responsiveWidth(90),
    height: responsiveHeight(7),
    backgroundColor: COLORS.orange,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: responsiveWidth(2),
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  textHeading: {
    color: COLORS.dark,
    fontWeight: '800',
    fontSize: responsiveFontSize(2.2),
    marginBottom: responsiveHeight(1),
  },
});
