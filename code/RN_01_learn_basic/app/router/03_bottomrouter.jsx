import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// ?BottomTabNavigator可以帮助我们实现底部tabbar的路由跳转
// todo 1.创建一个navigator实例
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

export default function App() {
  return (
    // todo 2.用Tab.Navigator组件包裹Tab.Screen 每个Screen是一个底部路由
    // *不需要借助navigation.navigate()就可以完成跳转
    <Tab.Navigator
      initialRouteName="Home"
      // 设置底部的图标
      screenOptions={({route}) => ({
        // *只要涉及图标的都是一个函数，关联三个参数:focused是否选中 color size
        tabBarIcon: ({focused, size, color}) => {
          return (
            <Button title={route.name} color={color} seize={size}></Button>
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
