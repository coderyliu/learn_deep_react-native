import React, {Component} from 'react';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

// ?WebView是一个react native提供的第三方组件，在RN0.60版本之后就分离出来了，单独维护
// ?通过WebView我们可以实现H5的iframe效果 也可以实现直接编写原生的html5代码（webview相当于一个浏览器的效果）

export default class About extends Component {
  render() {
    return (
      <View>
        {/* webview第一中使用方法：相当于H5的iframe标签,嵌入mobile网站
            这种使用方法也说明：我们可以直接用H5+JS开发一个m站，在通过webView引入
        */}
        <WebView
          source={{uri: 'https://reactnative.dev/'}}
          style={{flex: 1}}
          onLoad={() => console.log(1)}
        />
        {/* <WebView source={{uri: 'http://m.baidu.com'}} style={{marginTop: 20}} /> */}
        {/* webview第二种使用方法：直接使用H5标签 */}
        {/* <WebView
          source={{html: '<h1>hello webview</h1>'}}
          originWhitelist={['*']}
        /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
