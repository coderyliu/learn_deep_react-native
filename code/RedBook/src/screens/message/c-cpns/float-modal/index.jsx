import React, {useState, forwardRef, useImperativeHandle, memo} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';

import icon_group from '../../../../assets/images/icon_group.png';
import icon_create_group from '../../../../assets/images/icon_create_group.png';

const FloatModal = memo(
  forwardRef((props, ref) => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);

    const show = () => {
      setVisible(true);
    };

    const hide = () => {
      setVisible(false);
    };

    useImperativeHandle(ref, () => {
      return {
        show,
        hide,
      };
    });

    const handleGroupBtnPress = type => {};

    return (
      <Modal
        transparent={true}
        visible={visible}
        statusBarTranslucent={true}
        animationType="fade"
        onRequestClose={() => hide()}>
        <TouchableOpacity
          style={styles.root}
          activeOpacity={0.8}
          onPress={() => hide()}>
          <View style={styles.listWrapStyle}>
            <TouchableOpacity
              style={[
                styles.listItemStyle,
                {borderBottomWidth: 1, borderBottomColor: '#eee'},
              ]}
              activeOpacity={0.8}
              onPress={() => handleGroupBtnPress('center')}>
              <Image source={icon_group} style={styles.iconStyle} />
              <Text style={styles.iconTextStyle}>群聊广场</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.listItemStyle}
              activeOpacity={0.8}
              onPress={() => handleGroupBtnPress('create')}>
              <Image source={icon_create_group} style={styles.iconStyle} />
              <Text style={styles.iconTextStyle}>创建群聊</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }),
);

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000000C0',
  },
  listWrapStyle: {
    position: 'absolute',
    top: 80,
    right: 20,
    width: 150,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  listItemStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 56,
    paddingHorizontal: 10,
  },
  iconStyle: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
  iconTextStyle: {
    color: '#333',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default FloatModal;
