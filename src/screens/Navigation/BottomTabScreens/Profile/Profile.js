import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import Header from '../../../../components/MyHeader/MyHeader';
import COLORS from '../../../../consts/colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import userProfileImg from '../../../../assets/userImag.jpg';
import Divider from 'react-native-divider';
import CommmonProfile from './useProfile';
import CustomBottomSheet from '../../../../components/GohramBottomSheet/BottomSheet';
const Profile = ({navigation}) => {
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const handleLogoutPress = () => {
    setBottomSheetVisible(true);
  };
  const handleCloseBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const snapPoints = ['25%', '50%', '75%'];

  // const handlePresentModalPress = () => {
  //   // Logic to handle when the modal is presented
  //   // You can add any specific logic here
  //   setBottomSheetVisible(true);
  //   console.log('Modal presented!');
  // };

  const handlePresentModalPress = () => {
    setBottomSheetVisible(!bottomSheetVisible);
    console.log('Modal presented!');
  };

  return (
    <View style={{flex: 1, backgroundColor: COLORS.light}}>
      <Header title={'Profile'} />
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.light,
          paddingHorizontal: responsiveWidth(5),
        }}>
        {/* main container */}
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
        </View>
        <Divider
          borderColor={COLORS.grey}
          orientation="center"
          color={COLORS.grey}>
          I love Indore
        </Divider>

        {/* Icons and Informations start */}
        <View>
          <CommmonProfile
            iconName={'user'}
            UserInfo={'Personal Info'}
            iconLibrary={'Feather'}
            color={'#006d77'}
            onPress={() => navigation.navigate('PersonalInfo')}
          />
          <CommmonProfile
            iconName={'map'}
            UserInfo={'Addresses'}
            iconLibrary={'Feather'}
            color={'#ffd166'}
            onPress={() => navigation.navigate('AddressList')}
          />
          <CommmonProfile
            iconName={'payment'}
            UserInfo={'Payment Method'}
            iconLibrary={'MaterialIcons'}
            color={'#386641'}
            onPress={() => navigation.navigate('PaymentAdd')}
          />

          <CommmonProfile
            iconName={'favorite-border'}
            UserInfo={'Favourite'}
            iconLibrary={'MaterialIcons'}
            color={'#e27396'}
          />

          <CommmonProfile
            iconName={'notifications-outline'}
            UserInfo={'Notifications'}
            iconLibrary={'Ionicons'}
            color={'#006d77'}
          />

          <CommmonProfile
            iconName={'settings-outline'}
            UserInfo={'Settings'}
            iconLibrary={'Ionicons'}
            color={'#1446a0'}
          />

          <CommmonProfile
            iconName={'log-out'}
            UserInfo={'Logout'}
            iconLibrary={'Feather'}
            color={'#a31621'}
            onPress={handlePresentModalPress}
          />

          {bottomSheetVisible && (
            <CustomBottomSheet
              // snapPoints={['40%', '60%']}
              snapPoints={snapPoints}
              renderContent={() => (
                <View style={{flex: 1}}>
                  <Text>Custom Bottom Sheet 2</Text>
                  <Text>Some additional content here...</Text>
                </View>
              )}
              onPresentModalPress={handlePresentModalPress}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;

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
});
