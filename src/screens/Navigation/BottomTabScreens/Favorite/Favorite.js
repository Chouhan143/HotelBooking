import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../../../components/MyHeader/MyHeader';
import COLORS from '../../../../consts/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Favorite = () => {
  const OrderListData = [
    {
      id: 1,
      OrderId: '8558715544447',
      url: 'https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      City: 'Indore',
      HotelName: 'Hotel Embrald',
      OldPrice: '$100',
      price: '$120',
      status: 'Complete',
    },
    {
      id: 2,
      OrderId: '8558715544447',
      url: 'https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      City: 'Bhopal',
      HotelName: 'Hotel Embrald',
      OldPrice: '$98',
      price: '$120',
      status: 'Not Complete',
    },
    {
      id: 3,
      OrderId: '8558715544447',
      url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      City: 'Mumbai',
      HotelName: 'Hotel Embrald',
      OldPrice: '$110',
      price: '$120',
      status: 'Not Complete',
    },
    {
      id: 4,
      OrderId: '8558715544447',
      url: 'https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      City: 'Gujrat',
      HotelName: 'Hotel Embrald',
      OldPrice: '$100',
      price: '$120',
      status: 'Not Complete',
    },
  ];
  const renderListItem = ({item}) => {
    return (
      <View style={styles.TripDetailsContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image
            source={{uri: item.url}}
            style={{flex: 0.4, borderRadius: responsiveWidth(2)}}
          />
          <View style={{flex: 0.6}}>
            <View style={{paddingLeft: responsiveWidth(5)}}>
              <Text
                style={{
                  color: COLORS.primary,
                  fontSize: responsiveFontSize(2.2),
                  fontWeight: '600',
                  paddingTop: responsiveHeight(1),
                }}>
                {item.HotelName}
              </Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <MaterialIcons
                  name={'location-on'}
                  size={20}
                  color={'#F89880'}
                />
                <Text
                  style={{
                    color: COLORS.grey,
                    fontSize: responsiveFontSize(1.8),
                    paddingLeft: responsiveWidth(2),
                  }}>
                  {item.City}
                </Text>
              </View>
            </View>

            <View
              style={{
                paddingLeft: responsiveWidth(6),
                paddingTop: responsiveHeight(2),
              }}>
              <Text style={{textDecorationLine: 'line-through'}}>
                {item.OldPrice}
              </Text>
            </View>

            {/* dd */}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',

                alignItems: 'center',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: '800',
                    fontSize: responsiveFontSize(2),
                  }}>
                  {item.price}
                </Text>
                <Text
                  style={{
                    color: COLORS.grey,
                    fontSize: responsiveFontSize(1.8),
                  }}>
                  /Night
                </Text>
              </View>
              <View
                style={{
                  width: responsiveWidth(7),
                  height: responsiveWidth(7),
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: 'rgba(255, 192, 203,0.9)',
                  borderRadius: responsiveWidth(2),
                }}>
                <MaterialIcons name={'favorite'} size={15} color={'#FF0000'} />
                {/* 	 */}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Header title="Favorites" />
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

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light,
  },
  TripDetailsContainer: {
    flex: 1,
    width: responsiveWidth(90),
    height: responsiveHeight(16),
    backgroundColor: COLORS.light,
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
    borderRadius: responsiveWidth(2),
    borderWidth: 0.5,
    borderColor: COLORS.secondary,
    shadowColor: COLORS.secondary,
    elevation: 5,
  },
});
