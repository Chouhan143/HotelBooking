import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/MyHeader/MyHeader';
import COLORS from '../../consts/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Calendar, LocaleConfig} from 'react-native-calendars';

const BookingDetails = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const [selectedDates, setSelectedDates] = useState({});
  const handleDayPress = day => {
    const updatedSelectedDates = {...selectedDates};

    if (updatedSelectedDates[day.dateString]) {
      delete updatedSelectedDates[day.dateString];
    } else {
      updatedSelectedDates[day.dateString] = {
        selected: true,
        disableTouchEvent: true,
        selectedDotColor: 'orange',
      };
    }

    setSelectedDates(updatedSelectedDates);
  };
  return (
    <View style={styles.container}>
      <Header />
      {/* Top Header   */}
      <View style={styles.SubCOntainer}>
        <View style={styles.DateStyle}>
          <Text style={styles.DateText}>Dates</Text>
          <View style={{marginTop: responsiveHeight(1), flex: 0.5}}>
            <Calendar
              style={{
                borderColor: 'gray',
                height: responsiveHeight(20),
                borderRadius: responsiveWidth(5),
              }}
              theme={{
                backgroundColor: '#ffffff',
                calendarBackground: COLORS.light,
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: COLORS.primary,
                selectedDayTextColor: '#ffffff',
                todayTextColor: '#00adf5',
                dayTextColor: '#2d4150',
                arrowColor: COLORS.primary,
              }}
              onDayPress={handleDayPress}
              markedDates={selectedDates}
            />
          </View>
          <View style={{marginTop: responsiveHeight(1), flex: 0.2}}>
            <Text style={styles.DateText}>Guest & Room</Text>
            {/*  */}
            <GuestRoom text={'Adults'} subtext={'Over 17 Years'} />
            <GuestRoom text={'Child'} subtext={'Under 17 Years'} />
            <TouchableOpacity
              onPress={() => navigation.navigate('HotelSelectRoom')}>
              <GuestRoom text={'Room'} subtext={'Rooms Available'} />
            </TouchableOpacity>
            {/* Book Button  */}
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
    </View>
  );
};

export default BookingDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginTop: 30,
  },
  SubCOntainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: responsiveWidth(8),
    borderTopRightRadius: responsiveWidth(8),
  },
  DateStyle: {
    flex: 1,
    marginTop: responsiveHeight(3),
    paddingHorizontal: responsiveWidth(5),
  },
  DateText: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
    color: COLORS.dark,
  },
});

function GuestRoom({text, subtext}) {
  return (
    <View
      style={{
        width: responsiveWidth(90),
        height: responsiveHeight(9),
        backgroundColor: COLORS.light,
        borderWidth: 0.2,
        borderColor: COLORS.grey,
        marginVertical: responsiveHeight(0.5),
        borderRadius: responsiveWidth(1),
        justifyContent: 'center',
        paddingHorizontal: responsiveWidth(4),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
      }}>
      {/* main container */}
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: responsiveFontSize(1.8),
            fontWeight: '800',
            color: COLORS.primary,
          }}>
          {text}
        </Text>
        <Text
          style={{
            fontSize: responsiveFontSize(1.5),
            fontWeight: '600',
            color: COLORS.grey,
          }}>
          {subtext}
        </Text>
      </View>
      {/* second View Start */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity>
          <AntDesign name={'minussquare'} size={25} color={COLORS.orange} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: responsiveFontSize(1.8),
            fontWeight: '800',
            color: COLORS.primary,
            paddingHorizontal: responsiveWidth(3),
          }}>
          1
        </Text>
        <TouchableOpacity>
          <AntDesign name={'plussquare'} size={25} color={COLORS.orange} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
