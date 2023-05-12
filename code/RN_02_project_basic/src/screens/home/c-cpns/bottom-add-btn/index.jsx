import React from 'react';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';

const BottomAddBtn = props => {
  const {handleAddAccount} = props;

  return (
    <TouchableOpacity
      style={styles.root}
      activeOpacity={0.5}
      onPress={() => handleAddAccount()}>
      <Image
        style={styles.img}
        source={require('../../../../assets/images/icon_add.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    zIndex: 999,
    right: 20,
    bottom: 60,
  },
  img: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
  },
});

export default BottomAddBtn;
