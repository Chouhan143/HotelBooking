import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BottomTabNavigation from './BottomTabNavigation';
import HotelDetailsScreen from '../OtherStackScreens/HotelDetailsScreen';
import BookingDetails from '../OtherStackScreens/BookingDetails';
import HotelSelectRoom from '../OtherStackScreens/HotelSelectRoom';
import HotelBookingProcess from '../OtherStackScreens/HotelBookingProcess';
import PersonalInfo from './BottomTabScreens/Profile/PersonalInfo';
import EditProfile from './BottomTabScreens/Profile/EditProfile';
import AddressFields from './BottomTabScreens/Profile/AddressFields';
import AddressList from './BottomTabScreens/Profile/AddressList';
import PaymentAdd from './BottomTabScreens/Profile/PaymentAdd';
import COLORS from '../../consts/colors';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <BottomSheetModalProvider>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Group>
              <Stack.Screen
                name="BottomTabNavigation"
                component={BottomTabNavigation}
              />
              <Stack.Screen
                name="DetailsScreen"
                component={HotelDetailsScreen}
              />
              <Stack.Screen name="BookingDetails" component={BookingDetails} />
              <Stack.Screen
                name="HotelSelectRoom"
                component={HotelSelectRoom}
              />
              <Stack.Screen
                name="PersonalInfo"
                component={PersonalInfo}
                options={{
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: COLORS.primary,
                  },
                  headerTitleStyle: {
                    color: COLORS.white, // Set your custom header title color
                  },
                  headerTitle: 'Personal Profile',
                  headerTintColor: COLORS.white,
                }}
              />

              <Stack.Screen
                name="EditProfile"
                component={EditProfile}
                options={{
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: COLORS.primary,
                  },
                  headerTitleStyle: {
                    color: COLORS.white, // Set your custom header title color
                  },
                  headerTitle: 'Edit Profile',
                  headerTintColor: COLORS.white,
                }}
              />

              <Stack.Screen
                name="AddressFields"
                component={AddressFields}
                options={{
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: COLORS.primary,
                  },
                  headerTitleStyle: {
                    color: COLORS.white, // Set your custom header title color
                  },
                  headerTitle: 'Add New Address',
                  headerTintColor: COLORS.white,
                }}
              />

              <Stack.Screen
                name="AddressList"
                component={AddressList}
                options={{
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: COLORS.primary,
                  },
                  headerTitleStyle: {
                    color: COLORS.white, // Set your custom header title color
                  },
                  headerTitle: 'Add New Address',
                  headerTintColor: COLORS.white,
                }}
              />

              <Stack.Screen
                name="PaymentAdd"
                component={PaymentAdd}
                options={{
                  headerShown: true,
                  headerStyle: {
                    backgroundColor: COLORS.primary,
                  },
                  headerTitleStyle: {
                    color: COLORS.white, // Set your custom header title color
                  },
                  headerTitle: 'Add Payment',
                  headerTintColor: COLORS.white,
                }}
              />

              <Stack.Screen
                name="HotelBookingProcess"
                component={HotelBookingProcess}
              />
            </Stack.Group>
          </Stack.Navigator>
        </BottomSheetModalProvider>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
