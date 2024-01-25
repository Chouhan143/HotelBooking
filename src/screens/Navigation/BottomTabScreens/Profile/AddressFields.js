import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import COLORS from '../../../../consts/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const AddressFields = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
          paddingTop: responsiveHeight(2),
        }}>
        <Text style={styles.headingText}>Flat, House no. , Building</Text>
        <TextInput placeholder="hello" style={styles.textInputeStyle} />
      </View>
      {/* Addresss */}

      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
          paddingTop: responsiveHeight(2),
        }}>
        <Text style={styles.headingText}>Area,Sector,Village</Text>
        <TextInput placeholder="hello" style={styles.textInputeStyle} />
      </View>

      {/* Appartment */}

      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
          paddingTop: responsiveHeight(2),
        }}>
        <Text style={styles.headingText}>Town/City</Text>
        <TextInput placeholder="hello" style={styles.textInputeStyle} />
      </View>

      {/* Town/City */}

      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
          paddingTop: responsiveHeight(2),
        }}>
        <Text style={styles.headingText}>State</Text>
        <TextInput placeholder="hello" style={styles.textInputeStyle} />
      </View>

      {/* pin code  */}

      <View
        style={{
          paddingHorizontal: responsiveWidth(5),
          paddingTop: responsiveHeight(2),
        }}>
        <Text style={styles.headingText}>Pincode</Text>
        <TextInput placeholder="hello" style={styles.textInputeStyle} />
      </View>

      {/* Deliver Place  */}
      <View
        style={{flexDirection: 'row', paddingHorizontal: responsiveWidth(5)}}>
        <View style={styles.location}>
          <Text>Home</Text>
        </View>

        <View style={styles.location}>
          <Text>Work</Text>
        </View>

        <View style={styles.location}>
          <Text>Other</Text>
        </View>
      </View>
      {/*  Button is here  */}

      <TouchableOpacity
        style={{
          width: responsiveWidth(90),
          height: responsiveHeight(6),
          backgroundColor: COLORS.orange,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          bottom: responsiveHeight(2),
          borderRadius: responsiveWidth(2),
        }}
        onPress={() => navigation.navigate('AddressFields')}>
        <Text
          style={{
            fontSize: responsiveFontSize(2.5),
            fontWeight: '800',
            color: COLORS.white,
          }}>
          Save Address
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressFields;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
  },
  headingText: {
    color: COLORS.primary,
    fontSize: responsiveFontSize(2.2),
    fontWeight: '700',
  },
  textInputeStyle: {
    width: responsiveWidth(90),
    backgroundColor: COLORS.light,
    borderColor: COLORS.grey,
    borderRadius: responsiveHeight(0.5),
    paddingHorizontal: responsiveWidth(3),
    color: COLORS.dark,
    marginTop: responsiveHeight(1),
  },
  location: {
    padding: responsiveWidth(2),
    backgroundColor: COLORS.light,
    borderRadius: responsiveWidth(100),
    height: responsiveHeight(7),
    width: responsiveWidth(20),
    marginRight: responsiveWidth(3),
    marginTop: responsiveHeight(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
