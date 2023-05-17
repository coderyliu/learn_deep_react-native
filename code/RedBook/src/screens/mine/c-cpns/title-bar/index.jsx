import React, {memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';

import icon_menu from '../../../../assets/images/icon_menu.png';
import icon_shop from '../../../../assets/images/icon_shop_car.png';
import icon_share from '../../../../assets/images/icon_share.png';

const TitleBar = memo(props => {
  const {onSideMenuPress = () => {}} = props;
  const navigation = useNavigation();

  const handleIconPress = type => {
    if (type === 'menu') {
      onSideMenuPress();
    } else if (type === 'cart') {
      navigation.navigate('cart');
    } else if (type === 'share') {
    }
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => handleIconPress('menu')}>
        <Image style={styles.iconStyle} source={icon_menu} />
      </TouchableOpacity>
      <View style={styles.rightWrapStyle}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleIconPress('cart')}>
          <Image
            style={[styles.iconStyle, styles.rightImgStyle]}
            source={icon_shop}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleIconPress('share')}>
          <Image
            style={[styles.iconStyle, styles.rightImgStyle]}
            source={icon_share}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: 48,
    paddingHorizontal: 15,
  },
  rightWrapStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  rightImgStyle: {
    marginHorizontal: 10,
    tintColor: 'white',
  },
});

export default TitleBar;
