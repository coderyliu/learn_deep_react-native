import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// ?drawer router可以帮助我们实现侧边栏导航
// todo 1.创建一个drawerNavigation实例
const Drawer = createDrawerNavigator();

const Home = ({navigation}) => {
  return (
    <View>
      <Text>home page</Text>
      {/* 第三步：打开抽屉 */}
      <Button title="打开抽屉" onPress={() => navigation.openDrawer()}></Button>
      <Button
        title="跳转到关于"
        onPress={() => navigation.navigate('about')}></Button>
    </View>
  );
};

const About = ({navigation}) => {
  return (
    <View>
      <Text>about page</Text>
      <Button
        title="跳转到首页"
        onPress={() => navigation.navigate('home')}></Button>
    </View>
  );
};

export default class DrawerRouter extends Component {
  render() {
    return (
      // todo 2.用Drawer.Navigator组件包裹Drawer.Screen
      <Drawer.Navigator initialRouteName="home">
        {/* screen 必填的两个属性 name component路由名称和组件  */}
        <Drawer.Screen name="home" component={Home} />
        <Drawer.Screen name="about" component={About} />
      </Drawer.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
