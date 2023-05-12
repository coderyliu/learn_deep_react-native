import React, {forwardRef, useImperativeHandle, useState} from 'react';
import {
  View,
  StyleSheet,
  Modal,
  Text,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
} from 'react-native';

// ?forwardRef做一层包裹，获取函数式组件ref实例
const AppModal = forwardRef((props, ref) => {
  const {title, btnTitle = '确认', handleBtnPress} = props;

  const [isShowModal, setIsShowModal] = useState(false);

  // 展示modal
  const showModal = () => {
    setIsShowModal(true);
  };

  // 隐藏modal
  const hideModal = () => {
    setIsShowModal(false);
  };

  // ?通过hook把当前组件的实例方法或者属性暴露出去
  useImperativeHandle(ref, () => ({
    showModal,
    hideModal,
  }));

  return (
    <>
      {/* 注意：Modal下必须有一个View组件或者KeyboardAvoidingView组件*/}
      <Modal
        // 解决安卓下面Navigation返回按钮，退出Modal
        onRequestClose={hideModal}
        // 解决modal不能覆盖statusbar
        statusBarTranslucent={true}
        // transparent 属性决定了你的modal是否会填满整个视图。将此设置为 true 将在透明背景上呈现modal。
        transparent={true}
        // 是否展示modal
        visible={isShowModal}
        // 动画方式
        animationType="fade">
        {/* KeyboardAvoidingView可以对android/ios的键盘有一个动画效果，避免输入框被键盘覆盖 */}
        <KeyboardAvoidingView
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
          style={styles.root}>
          <View style={styles.container}>
            {/* 标题区域 */}
            <View style={styles.viewTitleStyle}>
              <Text style={styles.titleStyle}>{title}</Text>
              <TouchableOpacity
                style={styles.closeWrap}
                activeOpacity={0.5}
                onPress={hideModal}>
                <Image
                  style={styles.closeImg}
                  source={require('../../assets/images/icon_close_modal.png')}
                />
              </TouchableOpacity>
            </View>
            {/* 内容区域 */}
            {props.children}
            {/* 底部按钮区域 */}
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.btnStyle}
              onPress={() => handleBtnPress()}>
              <Text style={styles.btnTitleStyle}>{btnTitle}</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000060',
  },
  container: {
    width: '80%',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 12,
  },
  viewTitleStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  titleStyle: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeWrap: {
    position: 'absolute',
    top: 3,
    right: 0,
    padding: 10,
  },
  closeImg: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  btnStyle: {
    width: '100%',
    height: 40,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 12,
    backgroundColor: '#445ef1',
  },
  btnTitleStyle: {
    lineHeight: 40,
    color: 'white',
    textAlign: 'center',
  },
});

export default AppModal;
