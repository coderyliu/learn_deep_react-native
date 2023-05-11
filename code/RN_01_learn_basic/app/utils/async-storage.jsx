//封装一个Storage全局存储工具
// import AsyncStorage from '@react-native-async-storage/async-storage';

//注意：每一个AsyncStorage的实例方法返回的都是一个promise(异步存储)
class Storage {
  //单一存储
  async set(key, value) {
    //if(Object.prototype.toString.call(value).slice(8,-1)==='Object'){
    // await AsyncStorage.setItem(key, JSON.stringify(value));
    //}else{
    //	await AsyncStorage.setItem(key,value)
    //}
  }

  //单一获取
  async get(key) {
    // const value = await AsyncStorage.getItem(key);
    // return JSON.parse(value);
  }

  //单一删除
  async remove(key) {
    // await AsyncStorage.removeItem(key);
  }

  //清空
  async clear() {
    // await AsyncStorage.clear();
  }

  //合并
  async merge(key, value) {
    // await AsyncStorage.mergeItem(key, JSON.stringify(value));
  }

  //获取所有的key
  async getAllKeys() {
    // const keys = await AsyncStorage.getAllKeys();
    // return keys;
  }
}
