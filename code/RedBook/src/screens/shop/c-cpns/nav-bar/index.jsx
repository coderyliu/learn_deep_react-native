import React, {memo, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import icon_search from '../../../../assets/images/icon_search.png';
import icon_shop_car from '../../../../assets/images/icon_shop_car.png';
import icon_order from '../../../../assets/images/icon_orders.png';
import icon_menu_more from '../../../../assets/images/icon_menu_more.png';

const ShopNavBar = memo(props => {
  const navigation = useNavigation();

  const [searchValue, setSearchValue] = useState('');

  const handleNavIconPress = type => {
    switch (type) {
      case 'search':
        navigation.navigate('search');
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.leftWrapStyle}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => handleNavIconPress('search')}>
          <Image source={icon_search} style={styles.iconStyle} />
        </TouchableOpacity>
        <TextInput
          style={styles.inputStyle}
          value={searchValue}
          onChangeText={text => setSearchValue(text)}
          editable={true}
        />
      </View>
      <View style={styles.rightWrapStyle}>
        <TouchableOpacity
          style={styles.iconWrapStyle}
          activeOpacity={0.7}
          onPress={() => handleNavIconPress('car')}>
          <Image source={icon_shop_car} style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWrapStyle}
          activeOpacity={0.7}
          onPress={() => handleNavIconPress('order')}>
          <Image source={icon_order} style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconWrapStyle}
          activeOpacity={0.7}
          onPress={() => handleNavIconPress('more')}>
          <Image source={icon_menu_more} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 48,
    paddingHorizontal: 5,
    backgroundColor: '#fff',
  },
  leftWrapStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    paddingHorizontal: 5,
    borderRadius: 20,
    marginRight: 15,
    backgroundColor: 'rgb(245, 245, 245)',
  },
  inputStyle: {
    height: '100%',
  },
  rightWrapStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapStyle: {
    paddingHorizontal: 7,
  },
  iconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default ShopNavBar;
