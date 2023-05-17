import React, {memo, useEffect, useState} from 'react';
import {Dimensions, Image} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');
const showWidth = (screenWidth - 15) >> 1;

const ResizeImage = memo(props => {
  const {url} = props;
  const [showHeight, setShowHeight] = useState(200);

  useEffect(() => {
    // 通过Image.getSize()拿到成功回调参数的width,height,做一个计算得到该展示的height
    // Image.getSize(
    //   url + '?imageView2/2/w/640/format/webp|imageMogr2/strip',
    //   (width, height) => {
    //     const showHeight = (showWidth * height) / width;
    //     setShowHeight(showHeight);
    //   },
    // );
    // 暂时先展示固定的height
    setShowHeight(250);
  }, [url]);

  return (
    <Image
      style={{
        width: showWidth,
        height: showHeight,
        resizeMode: 'cover',
      }}
      source={{uri: url + '?imageView2/2/w/640/format/webp|imageMogr2/strip'}}
    />
  );
});

export default ResizeImage;
