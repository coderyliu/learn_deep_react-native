import React, {memo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';

// import icon_home_normal from '../../assets/images/icon_tab_home_normal.png';
// import icon_home_select from '../../assets/images/icon_tab_home_selected.png';
// import icon_shop_normal from '../../assets/images/icon_tab_shop_normal.png';
// import icon_shop_select from '../../assets/images/icon_tab_shop_selected.png';
// import icon_message_normal from '../../assets/images/icon_tab_message_normal.png';
// import icon_message_select from '../../assets/images/icon_tab_message_selected.png';
// import icon_mine_normal from '../../assets/images/icon_tab_mine_normal.png';
// import icon_mine_select from '../../assets/images/icon_tab_mine_selected.png';

import Home from '../home';
import Shop from '../shop';
import Message from '../message';
import Mine from '../mine';

// ?主页路由控制组件
const BottomTab = createBottomTabNavigator();

const MainTab = memo(() => {
  // 自定义底部TabBar
  const RedBookTabBar = ({state, descriptors, navigation}) => {
    // *这个自定义TabBar组件接收三个参数:state(包含routes,routeNames),descriptors(包含每个route的信息以及options),navigation(导航对象)
    const {routes, index} = state; //index表示当前路由索引

    const handleTabItemPress = data => {
      navigation.navigate(data.name);
    };

    const styles = StyleSheet.create({
      root: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 52,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: '#d5d5d5',
      },
      tabItem: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });

    return (
      <View style={styles.root}>
        {routes.map((item, i) => {
          const {options} = descriptors[item.key];
          const isFocused = index === i;

          return (
            <TouchableOpacity
              style={styles.tabItem}
              key={options.title}
              activeOpacity={0.5}
              onPress={() => handleTabItemPress(item)}>
              <Text
                style={{
                  color: isFocused ? '#333' : '#999',
                  fontSize: isFocused ? 18 : 16,
                  fontWeight: isFocused ? 'bold' : 'normal',
                }}>
                {options.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  return (
    <>
      <BottomTab.Navigator
        // todo 1.第一种方式：使用图标定义底部导航栏
        // !这个函数接收一个对象包含两个属性:{route,navigation}
        // *route路由包含：name,param,key
        // screenOptions={({route}) => {
        //   return {
        //     tabBarIcon: ({focused, color, size}) => {
        //       let iconName = '';
        //       switch (route.name) {
        //         case 'home':
        //           iconName = focused ? icon_home_select : icon_home_normal;
        //           break;
        //         case 'shop':
        //           iconName = focused ? icon_shop_select : icon_shop_normal;
        //           break;
        //         case 'message':
        //           iconName = focused
        //             ? icon_message_select
        //             : icon_message_normal;
        //           break;
        //         case 'mine':
        //           iconName = focused ? icon_mine_select : icon_mine_normal;
        //           break;
        //         default:
        //           break;
        //       }
        //       return (
        //         <Image
        //           source={iconName}
        //           style={{width: size, height: size, tintColor: color}}
        //         />
        //       );
        //     },
        //   };
        // }}
        // todo 2.自定义底部导航栏
        tabBar={props => <RedBookTabBar {...props} />}>
        <BottomTab.Screen
          name="home"
          component={Home}
          options={{
            title: '首页', //底部bottomTab的名称
            headerShown: false,
          }}
        />
        <BottomTab.Screen
          name="shop"
          component={Shop}
          options={{title: '购物', headerShown: false}}
        />
        <BottomTab.Screen
          name="message"
          component={Message}
          options={{title: '消息', headerShown: false}}
        />
        <BottomTab.Screen
          name="mine"
          component={Mine}
          options={{title: '我的', headerShown: false}}
        />
      </BottomTab.Navigator>
    </>
  );
});

export default MainTab;
