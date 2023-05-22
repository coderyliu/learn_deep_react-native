import React, {memo} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

const AppEmpty = memo(props => {
  const {icon, emptyText = '抱歉，暂无内容'} = props;

  return (
    <View style={styles.root}>
      <Image source={icon} style={styles.iconStyle} />
      <Text style={styles.textStyle}>{emptyText}</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    paddingTop: 120,
    backgroundColor: '#fff',
  },
  iconStyle: {
    width: 96,
    height: 96,
    resizeMode: 'contain',
  },
  textStyle: {
    color: '#333',
    fontSize: 18,
    marginTop: 16,
  },
});

export default AppEmpty;
