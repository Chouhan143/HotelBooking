import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Header from '../../components/MyHeader/MyHeader';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {ProgressSteps, ProgressStep} from 'react-native-progress-steps';
import COLORS from '../../consts/colors';

const HotelBookingProcess = ({route}) => {
  const {selectedRoom} = route.params;

  const cardData = [
    {
      id: 1,
      url: require('../../assets/money.png'),
      cardName: 'Cash',
    },
    {
      id: 2,
      url: require('../../assets/card.png'),
      cardName: 'Master Card',
    },
    {
      id: 3,
      url: require('../../assets/bank.png'),
      cardName: 'Rupay Card',
    },
    {
      id: 4,
      url: require('../../assets/visa.png'),
      cardName: 'Visa Card',
    },
  ];

  const buttonTextStyle = {
    backgroundColor: COLORS.light,
    padding: responsiveWidth(2),
    borderRadius: responsiveWidth(1),
    color: COLORS.primary,
  };
  return (
    <View
      style={{
        flex: 1,
        marginTop: responsiveHeight(5),
        backgroundColor: COLORS.primary,
      }}>
      <ProgressSteps
        borderWidth={2} // Set the border width for the circles
        activeStepIconBorderColor={COLORS.orange} // Set the active step icon border color
        activeStepIconColor={COLORS.orange} // Set the active step icon color
        completedStepIconColor={COLORS.orange} // Set the completed step icon color
        activeLabelColor={'#fff'}
        completedLabelColor={COLORS.grey}
        completedStepNumColor={'#fff'}
        disabledStepNumColor={COLORS.grey}
        completedProgressBarColor={COLORS.orange}
        activeStepNumColor={'#fff'}>
        {/* Booking Ui Container Start  */}
        <ProgressStep
          label="Booking"
          progressBarColor="red"
          nextBtnTextStyle={buttonTextStyle}>
          <View
            style={{
              flex: 1,
              backgroundColor: COLORS.light,
            }}>
            <View style={styles.containermain}>
              <Text style={styles.BookingText}>Booking Details</Text>
              <View style={styles.boxViewContainer}>
                <View
                  style={{
                    flex: 0.7,
                  }}>
                  <TouchableOpacity style={[styles.BoxContainer]}>
                    <View style={{flex: 0.4}}>
                      <Image
                        source={{uri: selectedRoom.url}}
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
                          {selectedRoom.BadHeading}
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
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <FontAwesome
                              name={'user'}
                              size={15}
                              color={COLORS.orange}
                            />
                            <Text style={{paddingLeft: responsiveWidth(2)}}>
                              {' '}
                              2 Guest
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Ionicons
                              name={'bed-sharp'}
                              size={15}
                              color={COLORS.orange}
                            />
                            <Text style={{paddingLeft: responsiveWidth(2)}}>
                              {selectedRoom.Bad}
                            </Text>
                          </View>
                        </View>
                        <View
                          style={{flexDirection: 'row', alignItems: 'center'}}>
                          <FontAwesome
                            name={'cutlery'}
                            size={15}
                            color={COLORS.orange}
                          />
                          <Text style={{paddingLeft: responsiveWidth(2)}}>
                            Breakfast Included
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={{flex: 0.3, borderTopWidth: 0.5}}>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingHorizontal: responsiveWidth(4),
                    }}>
                    <View style={{}}>
                      <Text>Check In</Text>
                      <Text style={styles.BookingText}>Sun 1 jan 2024</Text>
                    </View>
                    <View style={{}}>
                      <Text>Check Out</Text>
                      <Text style={styles.BookingText}>Fri 5 jan 2024</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={{marginTop: responsiveHeight(3)}}>
                <Text style={styles.BookingText}>Contact Details</Text>
              </View>
              <View
                style={[
                  styles.boxViewContainer,
                  {
                    height: responsiveHeight(13),
                    marginTop: responsiveHeight(3),
                  },
                ]}>
                <View
                  style={{
                    flex: 0.7,
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexDirection: 'row',
                      padding: responsiveWidth(2),
                    }}>
                    <Text
                      style={[
                        styles.BookingText,
                        {
                          color: COLORS.primary,
                          fontSize: responsiveFontSize(2),
                        },
                      ]}>
                      Amit Carpenter
                    </Text>
                    <TouchableOpacity>
                      <MaterialIcons
                        name={'edit'}
                        size={26}
                        color={COLORS.primary}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: responsiveWidth(3),
                    }}>
                    <MaterialCommunityIcons
                      name={'email'}
                      size={20}
                      color={COLORS.orange}
                    />
                    <Text
                      style={[
                        {
                          color: COLORS.grey,
                          fontSize: responsiveFontSize(2),
                          paddingLeft: responsiveHeight(1),
                        },
                      ]}>
                      amitcarpenter@gmail.com
                    </Text>
                  </View>
                  {/* contact number */}
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: responsiveWidth(3),
                    }}>
                    <MaterialCommunityIcons
                      name={'phone-outline'}
                      size={20}
                      color={COLORS.orange}
                    />
                    <Text
                      style={[
                        {
                          color: COLORS.grey,
                          fontSize: responsiveFontSize(2),
                          paddingLeft: responsiveHeight(1),
                        },
                      ]}>
                      +91-7869839873
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  marginTop: responsiveHeight(4),

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
                    Booking
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ProgressStep>

        {/* Payment Ui Container Start  */}

        <ProgressStep
          label="Payment"
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}>
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
                  <View style={{flex: 1}}>
                    <View
                      style={{
                        flex: 1,
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
                    <View
                      style={{justifyContent: 'center', alignItems: 'center'}}>
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
                    source={require('../../assets/card.png')}
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
            <View
              style={{
                marginTop: responsiveHeight(20),
                marginBottom: responsiveHeight(2),
                alignItems: 'center',
                flexDirection: 'row',
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
        </ProgressStep>

        {/* Receipt Ui Container Start  */}

        <ProgressStep
          label="Receipt"
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}>
          <View style={{alignItems: 'center', backgroundColor: COLORS.light}}>
            <View
              style={{
                width: responsiveWidth(90),
                height: responsiveHeight(60),
                backgroundColor: COLORS.light,
                borderWidth: 0.7,
                borderColor: COLORS.secondary2,
                marginVertical: responsiveHeight(4),
                borderRadius: responsiveWidth(4),
                shadowColor: COLORS.dark,
                elevation: 1,
              }}>
              <View
                style={{
                  paddingVertical: responsiveHeight(3),
                  alignItems: 'center',
                }}>
                <Image
                  source={require('../../assets/verified.png')}
                  resizeMode="contain"
                  style={{
                    width: responsiveWidth(40),
                    height: responsiveHeight(20),
                    alignSelf: 'center',
                  }}
                />
                <Text
                  style={[
                    styles.BookingText,
                    {
                      alignItems: 'center',
                      marginTop: responsiveHeight(3),
                      fontSize: responsiveFontSize(2.8),
                      color: COLORS.primary,
                    },
                  ]}>
                  Payment Successfull
                </Text>
              </View>
              {/* Invoice Ui  */}
              <View style={styles.paymentReciept}>
                <Text style={styles.paymentInvoiceText}>Invoice</Text>
                <Text style={styles.paymentInvoiceTextRight}>Invxf52235</Text>
              </View>
              {/* 1st */}
              <View style={styles.paymentReciept}>
                <Text style={styles.paymentInvoiceText}>Transaction Date</Text>
                <Text style={styles.paymentInvoiceTextRight}>
                  Web,18 oct 2023
                </Text>
              </View>
              {/* 2nd */}
              <View style={styles.paymentReciept}>
                <Text style={styles.paymentInvoiceText}>Payment Method</Text>
                <Text style={styles.paymentInvoiceTextRight}>Card</Text>
              </View>
              {/* 3rd */}
              <View style={styles.paymentReciept}>
                <Text style={styles.paymentInvoiceText}>Price Details</Text>
                <Text style={styles.paymentInvoiceTextRight}>$125</Text>
              </View>

              <TouchableOpacity
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: responsiveHeight(5),
                  borderWidth: 1,
                  borderColor: COLORS.secondary,
                  width: responsiveWidth(50),
                  height: responsiveHeight(5),
                  backgroundColor: COLORS.light,
                  alignSelf: 'center',
                  borderRadius: responsiveWidth(5),
                }}>
                <Text>Send Receipt</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
};

export default HotelBookingProcess;

const styles = StyleSheet.create({
  containermain: {
    paddingLeft: responsiveWidth(5),
    paddingBottom: responsiveHeight(5),
    paddingTop: responsiveHeight(2),
  },
  BookingText: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: '800',
    color: COLORS.dark,
  },
  boxViewContainer: {
    flex: 1,
    marginTop: responsiveHeight(3),
    width: responsiveWidth(90),
    height: responsiveHeight(30),
    borderWidth: 0.5,
    borderColor: COLORS.orange,
    shadowColor: COLORS.orange,
    borderRadius: responsiveWidth(4),
  },
  BoxContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  paymentReciept: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: responsiveWidth(5),
  },
  paymentInvoiceText: {
    color: COLORS.grey,
    fontSize: responsiveFontSize(2),
  },
  paymentInvoiceTextRight: {
    color: COLORS.primary,
    fontSize: responsiveFontSize(2),
    fontWeight: '600',
  },
});
