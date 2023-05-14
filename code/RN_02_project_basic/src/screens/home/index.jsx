import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

import BottomAddBtn from './c-cpns/bottom-add-btn';
import AppModal from '../../base-ui/app-modal';
import AccountList from './c-cpns/account-list';

const accountType = ['游戏', '平台', '银行', '其它'];

const Home = () => {
  //获取自组件实例暴露的方法
  const modalRef = useRef(null);

  const [accountList, setAccountList] = useState([
    {
      title: '游戏',
      data: [
        {
          id: 1,
          name: '王者荣耀',
          account: '2330053403@qq.com',
          password: '12345678',
        },
      ],
    },
    {
      title: '平台',
      data: [],
    },
    {
      title: '银行',
      data: [],
    },
    {
      title: '其它',
      data: [],
    },
  ]);

  const [type, setType] = useState('游戏');
  const [modalTitle, setModalTitle] = useState('添加账号');
  const [nameValue, setNameValue] = useState('');
  const [accountValue, setAccountValue] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState();

  // 展示添加账号密码本的弹窗
  const handleAddAccount = useCallback(() => {
    setModalTitle('添加账号');
    modalRef.current.showModal();
  }, [modalRef.current]);

  // 点击按钮确认添加
  const handleBtnPress = useCallback(() => {
    if (!nameValue || !accountValue || !password) {
      return Alert.alert('提示', '请您完善账号信息', [
        {
          text: '确认',
          onPress: () => {},
        },
      ]);
    }

    if (modalTitle === '添加账号') {
      setId((Math.random() + Date.now()).toString(36));
      const newAccountObj = {
        id: id,
        name: nameValue,
        account: accountValue,
        password: password,
      };

      const originAccountList = accountList;
      for (const item of originAccountList) {
        if (item.title === type) {
          item.data.push(newAccountObj);
        }
      }

      setAccountList(originAccountList);
    } else {
      const newAccountObj = {
        id: id,
        name: nameValue,
        account: accountValue,
        password: password,
      };

      const originAccountList = accountList;
      for (const item of originAccountList) {
        if (item.title === type) {
          for (let i = 0; i < item.data.length; i++) {
            if (item.data[i].id === id) {
              item.data.splice(i, 1, newAccountObj);
              break;
            }
          }
        }
      }

      setAccountList(originAccountList);
    }

    resetFormData();
    modalRef.current.hideModal();
  }, [
    nameValue,
    modalTitle,
    accountValue,
    password,
    accountList,
    modalRef.current,
  ]);

  // 点击编辑账号信息
  const handleEditAccount = useCallback(
    (data, section) => {
      setModalTitle('编辑账号');
      setType(section.title);
      setNameValue(data.name);
      setAccountValue(data.account);
      setPassword(data.password);
      setId(data.id);

      modalRef.current.showModal();
    },
    [modalRef.current],
  );

  // 长按删除账号
  const handleDeleteAccount = useCallback(
    (data, section) => {
      const originAccountList = accountList;

      for (const item of originAccountList) {
        if (item.title === section.title) {
          for (let i = 0; i < item.data.length; i++) {
            if (item.data[i].id === data.id) {
              item.data.splice(i, 1);
              break;
            }
          }
        }
      }

      setAccountList(originAccountList);
      return Alert.alert('成功', '删除账号成功', [
        {text: '确认', onPress: () => {}},
      ]);
    },
    [accountList],
  );

  const hideModal = useCallback(() => {
    resetFormData();
  }, []);

  // *重置表单
  const resetFormData = () => {
    setType('游戏');
    setNameValue('');
    setAccountValue('');
    setPassword('');
    setId('');
  };

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
                disabled={modalTitle === '编辑账号'}
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
      <AccountList
        accountList={accountList}
        handleDeleteAccount={handleDeleteAccount}
        handleEditAccountInfo={handleEditAccount}></AccountList>
      {/* 添加按钮 */}
      <BottomAddBtn handleAddAccount={handleAddAccount}></BottomAddBtn>

      {/* 弹框 */}
      <AppModal
        ref={modalRef}
        title={modalTitle}
        hideModalAction={hideModal}
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
