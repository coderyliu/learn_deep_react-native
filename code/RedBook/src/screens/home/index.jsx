import React, {memo, useEffect} from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {View, StyleSheet, Text} from 'react-native';

const Home = memo(() => {
  // redux相关
  const {findNavBarList} = useSelector(
    state => ({
      findNavBarList: state.home.findNavBarList,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);

  return (
    <View style={styles.root}>
      <Text>home</Text>
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default Home;
