import {Component} from 'react';
import {SafeAreaView} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

// ?Geolocation也是react native提供给我们用来定位的API，在0.60版本之后分离出来单独维护
// !需要授权，在 android/app/src/main/AndroidManifest.xml目录下新增<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />

class Position extends Component {
  componentDidMount() {
    // todo 1.在组件加载的时候获取地理位置信息
    Geolocation.getCurrentPosition(
      // 参数一：成功拿到位置结果后的回调
      info => {
        // ?我们可以拿到一个对象,其中最重要的是坐标:croods
        // accuracy:5
        // altitude: 5
        // heading:0
        // latitude:37.421998333333335 纬度
        // longitude:-122.084 京度
        // speed:0 速度（走路）

        console.log(info);
        // alert(JSON.stringify(info));
      },
      // 参数二：失败
      err => alert(JSON.stringify(err)),
      // 参数三：options
      {
        timeout: 1000 * 30,
        enableHighAccuracy: true, //是否精确定位
      },
    );

    // todo 2.需要监听位置变化
    const watchId = Geolocation.watchPosition(
      info => console.log(info), //成功回调
      err => console.log(err), //失败回调
      {
        interval: 1000 * 30, //位置更新的频率 android生效
        timeout: 1000 * 30,
        enableHighAccuracy: true,
      },
    );
    // 应用卸载时取消监听Geolocation.clearWatch(watchId)
  }

  render() {
    return <SafeAreaView></SafeAreaView>;
  }
}

export default Position;
