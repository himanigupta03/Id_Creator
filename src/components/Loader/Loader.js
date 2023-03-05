import React from 'react';
import {StyleSheet, ActivityIndicator, View, Modal} from 'react-native';

const Loader = ({visible}) => {
  return (
    <Modal transparent={true} visible={visible}>
      <View style={{flex: 1}}>
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    </Modal>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
//  <Modal animationType="fade" transparent={true} visible={visible}> 