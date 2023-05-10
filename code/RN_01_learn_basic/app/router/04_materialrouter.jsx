import * as React from 'react';
import {Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// ?materialTabNavigator提供给我们可以实现左右滑动实现路由切换的效果
const Tab = createMaterialTopTabNavigator();

function OrderUnpayScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 40}}>待付款!</Text>
    </View>
  );
}

function OrderPaidScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 40}}>待发货!</Text>
    </View>
  );
}

function OrderSentScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 40}}>待收获!</Text>
    </View>
  );
}

function OrderFinishScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 40}}>待评价!</Text>
    </View>
  );
}

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="OrderUnpay"
        component={OrderUnpayScreen}
        options={{title: '待付款'}}
      />
      <Tab.Screen
        name="OrderPaid"
        component={OrderPaidScreen}
        // options={{title: '待发货'}}
      />
      <Tab.Screen
        name="OrderSent"
        component={OrderSentScreen}
        // options={{title: '待收获'}}
      />
      <Tab.Screen
        name="OrderFinish"
        component={OrderFinishScreen}
        // options={{title: '待评价'}}
      />
    </Tab.Navigator>
  );
}
