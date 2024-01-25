import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import COLORS from '../../../../consts/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const AddressList = ({navigation}) => {
  const AddressData = [
    {
      id: 1,
      AddressLocation: 'Home',
      FullAdd: '2426, Royal Mesa new indore 452002',
    },
    {
      id: 2,
      AddressLocation: 'Office',
      FullAdd: '1166, Cat road  indore 452013',
    },
    {
      id: 3,
      AddressLocation: 'Other',
      FullAdd: '310, indore 452013',
    },
  ];

  const renderItems = ({item}) => {
    let iconComponent;
    let iconColor;

    switch (item.AddressLocation.toLowerCase()) {
      case 'home':
        iconColor = '#006d77';
        iconComponent = <AntDesign name={'home'} size={28} color={iconColor} />;

        break;
      case 'office':
        iconColor = '#740058';
        iconComponent = (
          <Feather name={'briefcase'} size={28} color={iconColor} />
        );
        break;
      case 'other':
        iconColor = 'green';
        iconComponent = (
          <MaterialIcons name={'location-on'} size={28} color={iconColor} />
        );
        break;
      default:
        iconColor = 'black';
    }

    return (
      <View style={styles.outerBox}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 'auto',
            marginRight: responsiveWidth(2),
          }}>
          <TouchableOpacity>
            <AntDesign name={'edit'} size={26} color={'#006d77'} />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingLeft: responsiveWidth(3)}}>
            <MaterialIcons
              name={'delete-outline'}
              size={24}
              color={'#006d77'}
            />
          </TouchableOpacity>
        </View>
        {/* edit and delete icon */}

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <AntDesign name={'home'} size={28} color={iconColor} /> */}
          {iconComponent}
          <View style={{paddingLeft: responsiveWidth(3)}}>
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                fontWeight: '500',
                color: COLORS.dark,
              }}>
              {item.AddressLocation}
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: '400',
                color: COLORS.dark,
              }}>
              {item.FullAdd}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={AddressData}
        renderItem={renderItems}
        keyExtractor={item => item.id.toString()}
      />

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
          Add New Address
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddressList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  outerBox: {
    marginHorizontal: responsiveWidth(3),
    marginVertical: responsiveHeight(2),
    padding: responsiveWidth(2),
    borderRadius: responsiveWidth(1),
    borderColor: COLORS.grey,
    borderWidth: 0.5,
  },
});
