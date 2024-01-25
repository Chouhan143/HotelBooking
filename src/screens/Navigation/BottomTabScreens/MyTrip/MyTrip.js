import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../../components/MyHeader/MyHeader';
import COLORS from '../../../../consts/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ScreensName from '../../../../consts/ScreenNames';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MyTrip = () => {
  const OrderListData = [
    {
      id: 1,
      OrderId: '8558715544447',
      url: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Bad: 'Single Bad',
      HotelName: 'Hotel Embrald',
      price: '$120',
      status: 'Complete',
    },
    {
      id: 2,
      OrderId: '8558715544447',
      url: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Bad: 'Single Bad',
      HotelName: 'Hotel Embrald',
      price: '$120',
      status: 'Not Complete',
    },
    {
      id: 3,
      OrderId: '8558715544447',
      url: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Bad: 'Single Bad',
      HotelName: 'Hotel Embrald',
      price: '$120',
      status: 'Not Complete',
    },
    {
      id: 4,
      OrderId: '8558715544447',
      url: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Bad: 'Single Bad',
      HotelName: 'Hotel Embrald',
      price: '$120',
      status: 'Not Complete',
    },
  ];
  const renderListItem = ({item}) => {
    return (
      <View style={styles.TripDetailsContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: responsiveHeight(2),
          }}>
          <Text> ORDER ID : {item.OrderId}</Text>
          <MaterialCommunityIcons
            name={'dots-vertical'}
            size={26}
            color={COLORS.grey}
          />
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: COLORS.secondary,
            marginTop: responsiveHeight(2),
          }}
        />
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={{uri: item.url}}
            style={{flex: 0.5, borderRadius: responsiveWidth(2)}}
          />
          <View style={{flex: 0.5}}>
            <Text
              style={{
                alignSelf: 'center',
                color: COLORS.primary,
                fontSize: responsiveFontSize(2.2),
                fontWeight: '600',
                paddingTop: responsiveHeight(1),
              }}>
              {item.HotelName}
            </Text>
            <Text
              style={{
                alignSelf: 'center',
                color: COLORS.grey,
                fontSize: responsiveFontSize(1.8),
              }}>
              {item.Bad}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: responsiveHeight(2),
                width: 'auto',
                height: responsiveHeight(4),
                backgroundColor:
                  item.status == 'Not Complete'
                    ? 'rgba(255, 49, 49,0.2)'
                    : 'rgba(0, 128, 0,0.2)',
                alignSelf: 'center',
                borderRadius: responsiveWidth(1),
                justifyContent: 'center',
                paddingHorizontal: responsiveWidth(6),
              }}>
              <Text
                style={{
                  color:
                    item.status == 'Complete'
                      ? 'rgb(0, 128, 0)'
                      : 'rgb(255, 49, 49)',
                }}>
                {item.status}
              </Text>
            </View>

            {/* dd */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingTop: responsiveHeight(4),
              }}>
              <Text
                style={{color: COLORS.grey, fontSize: responsiveFontSize(1.8)}}>
                Price Details
              </Text>
              <Text
                style={{
                  color: COLORS.primary,
                  fontWeight: '800',
                  fontSize: responsiveFontSize(2),
                }}>
                {item.price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const customActionIcon = () => {
    <MaterialIcons name="circle-notifications" size={26} color={'#fff'} />;
  };

  return (
    <View style={styles.container}>
      <Header title="My Trips" ActionIcon={customActionIcon} />
      <View style={{flex: 1, marginBottom: responsiveHeight(1)}}>
        <FlatList
          data={OrderListData}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default MyTrip;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  TripDetailsContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(30),
    backgroundColor: COLORS.light,
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveWidth(3),
    borderWidth: 0.5,
    borderColor: COLORS.secondary,
    shadowColor: COLORS.secondary,
    elevation: 5,
  },
});
