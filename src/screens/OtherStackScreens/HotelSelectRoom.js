import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/MyHeader/MyHeader';
import COLORS from '../../consts/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HotelSelectRoom = ({navigation}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);

  const data = [
    {
      id: 1,
      url: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg',
      BadHeading: 'Super Twin Bed',
      Bad: 'Twin Bad',
      price: '$125',
      Rooms: '5 Rooms Left',
    },
    {
      id: 2,
      BadHeading: 'Deluxe Twin Bed',
      url: 'https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Bad: 'Twin Bad',
      price: '$125',
      Rooms: '10 Rooms Left',
    },
    {
      id: 3,
      BadHeading: 'Super Twin Bed',
      url: 'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Bad: 'Twin Bad',
      price: '$125',
      Rooms: '8 Rooms Left',
    },
    {
      id: 4,
      BadHeading: 'Superior Single Bed',
      url: 'https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Bad: 'Single Bad',
      price: '$100',
      Rooms: '15 Rooms Left',
    },
    {
      id: 5,
      BadHeading: 'Superior Twin Bed',
      url: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      Bad: 'Twin Bad',
      price: '$125',
      Rooms: '25 Rooms Left',
    },
  ];
  const renderItem = ({item, index}) => {
    const isSelected = selectedItem === index;
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('HotelBookingProcess', {
            selectedRoom: item,
          })
        }
        style={[
          styles.BoxContainer,
          {
            borderColor: isSelected ? COLORS.orange : null,
            borderWidth: isSelected ? 0.5 : null,
          },
        ]}>
        <View style={{flex: 0.4}}>
          <Image
            source={{uri: item.url}}
            style={{flex: 1, borderRadius: responsiveWidth(2)}}
          />
        </View>
        <View style={{flex: 0.6}}>
          <View
            style={{
              alignSelf: 'center',
              paddingVertical: responsiveHeight(2),
              paddingTop: responsiveHeight(2),
            }}>
            <Text
              style={{
                color: COLORS.dark,
                fontSize: responsiveFontSize(2),
                fontWeight: '700',
              }}>
              {item.BadHeading}
            </Text>
          </View>
          {/* heading End here */}
          <View
            style={{
              paddingHorizontal: responsiveWidth(5),
            }}>
            <View
              style={{
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingVertical: responsiveHeight(1),
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <FontAwesome name={'user'} size={15} color={COLORS.grey} />
                <Text style={{paddingLeft: responsiveWidth(2)}}> 2 Guest</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Ionicons name={'bed-sharp'} size={15} color={COLORS.grey} />
                <Text style={{paddingLeft: responsiveWidth(2)}}>
                  {item.Bad}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome name={'cutlery'} size={15} color={COLORS.grey} />
              <Text style={{paddingLeft: responsiveWidth(2)}}>
                Breakfast Included
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: responsiveHeight(1),
                paddingTop: responsiveHeight(2),
              }}>
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: '500',
                  color: COLORS.primary,
                }}>
                {item.price}
              </Text>
              <Text
                style={{
                  paddingLeft: responsiveWidth(2),
                  alignSelf: 'flex-end',
                  justifyContent: 'flex-end',
                  color: 'red',
                }}>
                {item.Rooms}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView
      style={{flex: 1, backgroundColor: COLORS.light, marginTop: 30}}>
      <Header />
      <ScrollView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        <View
          style={{
            marginTop: responsiveHeight(5),
            marginBottom: responsiveHeight(2),
            justifyContent: 'space-around',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                fontSize: responsiveFontSize(1.8),
                letterSpacing: responsiveWidth(0.5),
              }}>
              price
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(2.5),
                fontWeight: '800',
                color: COLORS.primary,
              }}>
              {selectedPrice || '$125'}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              width: responsiveWidth(60),
              height: responsiveHeight(6),
              backgroundColor: 'orange',
              alignSelf: 'center',
              alignItems: 'center',
              borderRadius: responsiveWidth(30),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                fontWeight: '700',
                color: COLORS.primary,
              }}>
              Booking
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HotelSelectRoom;

const styles = StyleSheet.create({
  BoxContainer: {
    flex: 1,
    width: responsiveWidth(90),
    height: responsiveHeight(25),
    backgroundColor: COLORS.light,
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
    borderColor: COLORS.orange,
    borderWidth: 0.5,
    borderRadius: responsiveWidth(2),
    shadowColor: COLORS.orange,
    elevation: 5,
    flexDirection: 'row',
  },
});
