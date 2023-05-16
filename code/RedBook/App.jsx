import 'react-native-gesture-handler'; //引入这个库来使用路由
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';

import AppWelcome from './src/screens/welcome';
import AppLogin from './src/screens/login';
import MainTab from './src/screens/maintab';
import ArticleDetail from './src/screens/article-detail';

// 使用栈导航
const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      {/* statusbar */}
      <StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="welcome"
          screenOptions={{
            headerShown: false,
            // 解决路由跳转多次之后，可能会出现上层穿透下层的Bug，给每个页面增加一个海拔
            cardStyle: {elevation: 1},
          }}>
          <Stack.Screen name="welcome" component={AppWelcome} />
          <Stack.Screen
            name="login"
            component={AppLogin}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS, //页面切换加上动画效果
            }}
          />
          <Stack.Screen
            name="mainTab"
            component={MainTab}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
          <Stack.Screen
            name="articleDetail"
            component={ArticleDetail}
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
