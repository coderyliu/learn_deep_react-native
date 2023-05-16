import React, {memo, useState} from 'react';
import {StyleSheet} from 'react-native';

import Swiper from 'react-native-swiper';

const AppSwiper = memo(props => {
  const {
    isAutoPlay = false,
    isLoop = false,
    height = 500,
    onIndexChange = () => {},
  } = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleIndexChanged = index => {
    setCurrentIndex(index);
    onIndexChange(index);
  };

  return (
    <Swiper
      style={styles.root}
      index={currentIndex}
      autoplay={isAutoPlay}
      loop={isLoop}
      showsButtons={true}
      buttonWrapperStyle={styles.buttonWrapperStyle}
      dotStyle={styles.dotStyle}
      dotColor="#bfb9b9"
      activeDotColor="white"
      activeDotStyle={styles.activeDotStyle}
      height={height}
      onIndexChanged={handleIndexChanged}>
      {props.children?.length > 0 ? props.children : ''}
    </Swiper>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  buttonWrapperStyle: {
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
  dotStyle: {
    width: 10,
    height: 10,
  },
  activeDotStyle: {
    width: 10,
    height: 10,
  },
});

export default AppSwiper;
