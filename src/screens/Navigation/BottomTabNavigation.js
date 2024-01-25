import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreen from './BottomTabScreens/HomeScreenUi/HomeScreen';
import DetailsScreen from '../OtherStackScreens/HotelDetailsScreen';
import MyTrip from './BottomTabScreens/MyTrip/MyTrip';
import Favorite from './BottomTabScreens/Favorite/Favorite';
import Profile from './BottomTabScreens/Profile/Profile';
import COLORS from '../../consts/colors';

import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';

const Tab = createMaterialBottomTabNavigator();

function BottomTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#f0edf6"
      inactiveColor={COLORS.grey}
      barStyle={{backgroundColor: COLORS.primary}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyTrip"
        component={MyTrip}
        options={{
          tabBarLabel: 'My Trip',
          tabBarIcon: ({color, focused}) => (
            <Ionicons
              name={focused ? 'ticket' : 'ticket-outline'}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: 'Favorite',
          tabBarIcon: ({color, focused}) => (
            <MaterialIcons
              name={focused ? 'favorite' : 'favorite-outline'}
              color={color}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, focused}) => (
            <FontAwesome
              name={focused ? 'user-circle' : 'user-circle-o'}
              color={color}
              size={23}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation;
