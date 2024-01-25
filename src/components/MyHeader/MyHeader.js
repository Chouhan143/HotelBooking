import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ColorValue,
  StatusBar,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import MyText from '../MyText'; // Please make sure this path is correct
import ScreensName from '../../consts/ScreenNames';
// import {styles} from './styles';
import useHeader from './useHeader';
import COLORS from '../../consts/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Header = ({
  title,
  hasActionIcon = false,
  backgroundColor = COLORS.primary,
  ActionIcon = <AntDesign name="delete" size={20} color={'#fff'} />,
  actionBtnPress = () => {},
  isActionBtnDisabled = false,
  screen,
}) => {
  const {goBack} = useHeader();

  return (
    <View style={[styles.headerContainer, {backgroundColor}]}>
      <StatusBar backgroundColor={COLORS.primary} />
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => goBack(screen)}>
        <Feather name="arrow-left-circle" size={30} />
      </TouchableOpacity>
      <MyText
        text={title}
        fontsize={20}
        fontFamily="BOLD"
        color={COLORS.white}
      />
      {hasActionIcon ? (
        <TouchableOpacity
          onPress={actionBtnPress}
          style={[
            styles.actionButton,
            isActionBtnDisabled && styles.disabledButton,
          ]}
          disabled={isActionBtnDisabled}>
          {ActionIcon}
        </TouchableOpacity>
      ) : (
        <MaterialIcons name="circle-notifications" size={30} color={'#fff'} />
      )}
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 30,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goBackButton: {
    backgroundColor: '#FFF',
    borderRadius: 100,
    marginLeft: 10,
  },
  actionButton: {
    backgroundColor: '#fff',
    padding: 8,
    // borderRadius: 100,
  },
  disabledButton: {
    backgroundColor: '#d3d3d3',
  },
  placeholderText: {
    color: 'red',
  },
});
