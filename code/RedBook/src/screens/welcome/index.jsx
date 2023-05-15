import React, {memo, useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';

const AppWelcome = memo(props => {
  const {navigation} = props;

  // 三秒之后跳转到首页
  useEffect(() => {
    setTimeout(() => {
      // !注意首页这里要用路由替换，这个欢迎界面没什么用了
      navigation.replace('mainTab');
    }, 3000);
  }, []);

  return (
    <View style={styles.root}>
      <Image
        source={require('../../assets/images/icon_main_logo.png')}
        style={styles.logoStyle}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  logoStyle: {
    width: 200,
    height: 180,
    marginTop: 200,
    resizeMode: 'contain',
  },
});

export default AppWelcome;
