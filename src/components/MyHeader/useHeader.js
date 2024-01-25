// hooks/useHeaderComponent.js
import {useNavigation} from '@react-navigation/native';
import ScreensName from '../../consts/ScreenNames';

const useHeader = () => {
  const navigation = useNavigation();

  const goBack = currentScreen => {
    if (
      currentScreen === ScreensName.BookingDetails ||
      currentScreen === ScreensName.BottomTabNavigation ||
      currentScreen === ScreensName.DetailsScreen
    ) {
      navigation.navigate(ScreensName.Main);
    } else {
      navigation.goBack();
    }
  };

  return {
    goBack,
    // any other logic you want to include
  };
};

export default useHeader;
