import {Text, View} from 'react-native';
import React, {Component} from 'react';

export class Home extends Component {
  // ?邂逅react native
  // *什么是react native?react native 简称RN,是facebook在2015年开源的移动端混合开发框架,用于构建移动端应用
  // * react native官方网站有这样一句话：learn once,write anywhere

  // ?从移动端开发角度来讲，把开发分为三个方向：
  // todo 1.原生开发：即安卓(java,kotlin)和苹果(swift,object-c)
  // todo 2.混合开发：即用混合开发框架:RN,week(alibaba),flutter开发移动端应用
  // todo 3.H5开发，即用HTML5,css,JS开发网页web应用

  // ?开发方向的优缺点：
  // *原生开发：优点：性能好、调试方便、bug少     缺点：成本高、门槛高、效率低
  // *混合开发：优点：成本低(一套代码、多端运行)、门槛低  缺点：性能一般、效率一般、Bug多
  // *H5开发：优点：成本低、效率高、性能一般

  // ?知道这些之后我们要准备RN开发的环境
  // todo 1.首先要准备Node(版本高于12或者高于14)、npm、yarn、react-native、react-native-cli
  // *官方文档推荐我们暂时不要使用全局react-native,而是通过npx react-native@latest init project
  // todo 2.准备安卓开发环境：JDK(这里注意，使用不同的RN版本，需要不同的JDK版本)比如：最新的RN0.71版本需要JDK11支持
  // todo install android studio(下载原生android开发工具)，之后我们按照提示可以下载android sdk(这个是最重要的)
  // todo 按照提示，我们需要配置电脑的环境变量：ANDROID_HOME以及JAVA_HOME 和一些按照开发的tools
  // todo 3.这些安装完成之后可以通过cmd查看java,adb是否可以正常使用
  // todo 4.启动项目：yarn run android或者npx react-native run-android(官方推荐)
  // !最重要的的需要按照提示；在android/app/src/main目录下，新建assets目录，在package.json中新增android-bundle脚本
  // !这样项目才可以正常运行，以及项目路径中不能包含中文,同时android模拟器需要打开
  // *最开始运行项目的时候，需要一个半小时左右的初始化，下载各种包（非常考验翻墙）

  render() {
    return (
      <View>
        {/* react native中任何文字都要被包裹在Text组件中 */}
        <Text>hello react native</Text>
      </View>
    );
  }
}

export default Home;
