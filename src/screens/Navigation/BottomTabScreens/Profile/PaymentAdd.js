import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import COLORS from '../../../../consts/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PaymentAdd = () => {
  const cardData = [
    {
      id: 1,
      url: require('../../../../assets/money.png'),
      cardName: 'Cash',
    },
    {
      id: 2,
      url: require('../../../../assets/card.png'),
      cardName: 'Master Card',
    },
    {
      id: 3,
      url: require('../../../../assets/bank.png'),
      cardName: 'Rupay Card',
    },
    {
      id: 4,
      url: require('../../../../assets/visa.png'),
      cardName: 'Visa Card',
    },
  ];
  return (
    <View style={{flex: 1, backgroundColor: COLORS.light}}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: COLORS.light,
        }}>
        <FlatList
          data={cardData}
          horizontal
          renderItem={({item}) => {
            return (
              <View>
                <View
                  style={{
                    // flex: 0.7,
                    width: responsiveWidth(40),
                    height: responsiveHeight(12),
                    backgroundColor: COLORS.lightGrey,
                    marginLeft: responsiveWidth(3),
                    borderRadius: responsiveWidth(1),
                    marginVertical: responsiveHeight(1),
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={item.url}
                    resizeMode="contain"
                    style={{
                      width: responsiveWidth(30),
                      height: responsiveHeight(10),
                      alignSelf: 'center',
                    }}
                  />
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Text
                    style={[
                      styles.BookingText,
                      {fontSize: responsiveFontSize(1.8)},
                    ]}>
                    {item.cardName}
                  </Text>
                </View>
              </View>
            );
          }}
          keyExtractor={item => item.id.toString()}
        />
        {/* Flatlist End Here */}

        <View
          style={{
            width: responsiveWidth(95),
            height: responsiveHeight(12),
            backgroundColor: COLORS.lightGrey,
            borderRadius: responsiveWidth(2),
            marginVertical: responsiveHeight(2),
            paddingHorizontal: responsiveWidth(5),
          }}>
          <View style={{paddingVertical: responsiveHeight(1)}}>
            <Text style={styles.BookingText}>MasterCard</Text>
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../../../assets/card.png')}
                resizeMode="contain"
                style={{
                  width: responsiveWidth(10),
                  height: responsiveHeight(5),
                }}
              />
              <Text
                style={{
                  fontSize: responsiveFontSize(2),
                  fontWeight: '600',
                  color: COLORS.grey,
                  paddingLeft: responsiveWidth(1),
                }}>
                ****************430
              </Text>
            </View>
            <View style={{}}>
              <MaterialIcons
                name={'keyboard-arrow-down'}
                size={25}
                color={COLORS.grey}
              />
            </View>
          </View>
        </View>

        <View
          style={{
            width: responsiveWidth(95),
            height: responsiveHeight(8),
            borderRadius: responsiveWidth(2),
            marginVertical: responsiveHeight(2),
            borderWidth: 0.8,
            borderColor: COLORS.orange,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name={'add-outline'} size={30} color={COLORS.orange} />
          <Text
            style={[
              styles.BookingText,
              {color: COLORS.orange, paddingLeft: responsiveWidth(2)},
            ]}>
            ADD NEW
          </Text>
        </View>
      </View>

      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          position: 'absolute',
          bottom: responsiveHeight(3),
          alignSelf: 'center',
        }}>
        <View style={{marginRight: responsiveWidth(5)}}>
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
            $125
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
            Confirm & Pay
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PaymentAdd;

const styles = StyleSheet.create({});
