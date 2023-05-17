import React, {memo, useEffect, useRef, useState} from 'react';
import {TouchableOpacity, Image, Animated, StyleSheet} from 'react-native';

import icon_heart from '../../assets/images/icon_heart.png';
import icon_un_heart from '../../assets/images/icon_heart_empty.png';

const Heart = memo(props => {
  const {value, onValueChange = () => {}, size = 20} = props;

  const [showState, setShowState] = useState(false);
  const scaleValue = useRef(new Animated.Value(0)).current;
  const opacityValue = useRef(new Animated.Value(0)).current;

  const handleHeartPress = () => {
    const newState = !showState;
    setShowState(newState);
    onValueChange(newState);

    if (newState) {
      opacityValue.setValue(1);

      const scaleAnim = Animated.timing(scaleValue, {
        toValue: 1.8,
        duration: 400,
        useNativeDriver: true,
      });

      const opacityAnim = Animated.timing(opacityValue, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
        delay: 200,
      });

      Animated.parallel([scaleAnim, opacityAnim]).start();
    } else {
      opacityValue.setValue(0);
      scaleValue.setValue(0);
    }
  };

  useEffect(() => {
    setShowState(value);
  }, [value]);

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => handleHeartPress()}>
      <Image
        source={showState ? icon_heart : icon_un_heart}
        style={[styles.heartImgStyle, {width: size, height: size}]}
      />

      {/* 添加动画 */}
      <Animated.View
        style={{
          position: 'absolute', //加上绝对定位,才不会占位
          width: size,
          height: size,
          borderWidth: size / 20,
          borderRadius: size / 2,
          borderColor: '#ff2442',
          transform: [
            {
              scale: scaleValue,
            },
          ],
          opacity: opacityValue,
        }}
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  heartImgStyle: {
    width: 20,
    height: 20,
    marginRight: 3,
    resizeMode: 'contain',
  },
});

export default Heart;
