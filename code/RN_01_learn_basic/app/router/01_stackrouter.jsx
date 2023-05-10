import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

// ?使用stack 导航的步骤
// todo 1.创建一个stackNavigation
const Stack = createStackNavigator();

// todo 4.在路由内部，通过props.navigation这个对象完成某些逻辑
const Home = ({navigation}) => {
  // console.log(navigation);
  return (
    <View>
      <Text>Home Page</Text>
      <Button
        title="跳转到About"
        onPress={() => navigation.navigate('about')}></Button>
    </View>
  );
};

const About = ({navigation}) => {
  return (
    <View>
      <Text>About Page</Text>
      <Button
        title="跳转到Home"
        onPress={() => navigation.navigate('home')}></Button>
    </View>
  );
};

export default class StackRouter extends Component {
  render() {
    return (
      // todo 2.创建Stack.Navigator
      // todo 3.创建Stack.Screen(表示一个路由，屏幕)
      // *Navigator有许多参数
      // 1.initialRouteName 初始渲染路由 不指定默认渲染第一个
      // !initialRouteName 发生改变时，需要重新启动应用。RN 的热更新对initialRouteName 不起作用。
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={
          {
            // 2.headerMode 是否显示header
            // headerMode: 'none',
          }
        }>
        {/* name 表示唯一路由名称 component要渲染的组件 name 和component为必填项*/}
        {/* 完整参数查看:https://reactnavigation.org/docs/native-stack-navigator#options */}
        <Stack.Screen
          name="home"
          component={Home}
          // options中可以设置screen当前屏幕的一些参数
          options={{
            title: '首页',
            // 头部样式 背景颜色和高度
            headerStyle: {backgroundColor: '#bfa', height: 50},
            // 头部字体样式
            headerTitleStyle: {
              color: 'blue', //颜色
              fontSize: 30, //字体大小
              fontWeight: 'bold', //加粗
            },
            // 是否显示header
            headerShown: true,
            // 头部标题排列顺序
            headerTitleAlign: 'center',
            // 头部右侧内容
            headerRight: () => {
              return <Text>关于</Text>;
            },
          }}
        />
        <Stack.Screen name="about" component={About} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
