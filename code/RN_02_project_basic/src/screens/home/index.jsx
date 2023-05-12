import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SectionList,
} from 'react-native';

import BottomAddBtn from './c-cpns/bottom-add-btn';
import AppModal from '../../base-ui/app-modal';

const accountType = ['游戏', '平台', '银行', '其它'];

const Home = () => {
  //获取自组件实例暴露的方法
  const modalRef = useRef(null);

  const [type, setType] = useState('游戏');
  const [modalTitle, setModalTitle] = useState('添加账号');
  const [nameValue, setNameValue] = useState('');
  const [accountValue, setAccountValue] = useState('');
  const [password, setPassword] = useState('');

  // 展示添加账号密码本的弹窗
  const handleAddAccount = useCallback(() => {
    modalRef.current.showModal();
  });

  // 点击按钮确认添加
  const handleBtnPress = useCallback(() => {
    console.log(1);
  });

  // ?获取数据
  const loadData = () => {};

  // ?组件加载获取数据
  useEffect(() => {}, []);

  // 输入框组件
  const inputCpn = (value, tip, setValue) => {
    return (
      <TextInput
        value={value}
        style={{
          width: '100%',
          height: 50,
          borderBottomWidth: 1,
          borderBottomColor: '#eee',
        }}
        maxLength={20}
        placeholder={tip}
        onChangeText={text => setValue(text)}
      />
    );
  };

  // 弹窗内容区域
  const ModalContent = () => {
    const styles = StyleSheet.create({
      root: {},
      accountType: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
      },
      tabStyle: {
        flex: 1,
        height: 34,
        borderWidth: 1,
        borderColor: '#666',
      },
      leftTabStyle: {
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
      },
      rightTabStyle: {
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
      },
      activeTabStyle: {
        backgroundColor: '#3050ff',
      },
      tabTextStyle: {
        lineHeight: 30,
        color: '#333',
        textAlign: 'center',
      },
      subtitleStyle: {
        paddingLeft: 5,
        marginTop: 10,
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
      },
    });

    return (
      <View style={styles.root}>
        {/* 账号分类 */}
        <Text style={styles.subtitleStyle}>账号类型</Text>
        <View style={[styles.accountType]}>
          {accountType.map((item, index) => {
            return (
              <TouchableOpacity
                style={[
                  styles.tabStyle,
                  index === 0
                    ? styles.leftTabStyle
                    : index === 3
                    ? styles.rightTabStyle
                    : {},
                  index > 0 && {marginLeft: -1},
                  item === type ? styles.activeTabStyle : {},
                ]}
                key={`${item}`}
                activeOpacity={0.5}
                onPress={() => {
                  setType(item);
                }}>
                <Text
                  style={[
                    styles.tabTextStyle,
                    item === type ? {color: '#fff'} : {},
                  ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        {/* 输入框 */}
        <Text style={styles.subtitleStyle}>账号名称</Text>
        {inputCpn(nameValue, '请输入账号名称', setNameValue)}
        <Text style={styles.subtitleStyle}>账号</Text>
        {inputCpn(accountValue, '请输入账号', setAccountValue)}
        <Text style={styles.subtitleStyle}>密码</Text>
        {inputCpn(password, '请输入密码', setPassword)}
      </View>
    );
  };

  return (
    <View style={styles.root}>
      {/* 页面顶部标题 */}
      <View style={styles.viewTitleStyle}>
        <Text style={styles.titleStyle}>账号密码本</Text>
      </View>
      {/* 列表区域 */}
      {/* <SectionList></SectionList> */}
      {/* 添加按钮 */}
      <BottomAddBtn handleAddAccount={handleAddAccount}></BottomAddBtn>

      {/* 弹框 */}
      <AppModal
        ref={modalRef}
        title={modalTitle}
        handleBtnPress={handleBtnPress}>
        {ModalContent()}
      </AppModal>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f0f0f0',
  },
  viewTitleStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  titleStyle: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
