import React, {useCallback, useMemo, useRef} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

const CustomBottomSheet = ({
  snapPoints,
  renderContent,
  onPresentModalPress,
}) => {
  const bottomSheetModalRef = useRef(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
    if (onPresentModalPress) {
      onPresentModalPress();
    }
  }, [onPresentModalPress]);

  return (
    <View>
      {/* <Button
        onPress={handlePresentModalPress}
        title="Present Modal"
        color="black"
      /> */}
      <BottomSheetModal
        ref={bottomSheetModalRef}
        // index={1}
        snapPoints={snapPoints}
        onDismiss={() => {
          if (onPresentModalPress) {
            onPresentModalPress();
          }
        }}
        // onChange={handleSheetChanges}
      >
        <Text>helllo</Text>
        {/* <View style={styles.contentContainer}>{renderContent()}</View> */}
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default CustomBottomSheet;
