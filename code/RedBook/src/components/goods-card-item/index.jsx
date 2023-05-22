import React, {memo} from 'react';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

const GoodsCardItem = memo(props => {
  const {dataInfo = {}} = props;

  const handleGoodsItemPress = () => {};

  return (
    <TouchableOpacity
      style={styles.root}
      activeOpacity={0.8}
      onPress={() => handleGoodsItemPress()}>
      <Image source={{uri: dataInfo?.image}} style={styles.coverImgStyle} />
      <View style={styles.bottomInfoStyle}>
        <Text numberOfLines={2} style={styles.titleTextStyle}>
          {dataInfo?.title}
        </Text>
        <Text style={styles.priceTextStyle}>￥{dataInfo?.price}</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '48%',
    borderRadius: 10,
    marginLeft: 5,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  coverImgStyle: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'contain',
  },
  bottomInfoStyle: {
    padding: 10,
  },
  titleTextStyle: {
    marginBottom: 5,
    color: '#333',
    fontSize: 16,
  },
  priceTextStyle: {
    color: '#333',
    fontSize: 18,
  },
});

export default GoodsCardItem;
