import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SectionList,
  Image,
  TouchableOpacity,
  Alert,
  LayoutAnimation,
} from 'react-native';

import GameIcon from '../../../../assets/images/icon_game.png';
import PlatformIcon from '../../../../assets/images/icon_platform.png';
import BankIcon from '../../../../assets/images/icon_bank.png';
import OtherIcon from '../../../../assets/images/icon_other.png';

const mapAccountTypeToIcon = {
  游戏: GameIcon,
  平台: PlatformIcon,
  银行: BankIcon,
  其它: OtherIcon,
};

const AccountList = props => {
  const {accountList, handleEditAccountInfo, handleDeleteAccount} = props;

  const [showArrow, setShowArrow] = useState({
    游戏: false,
    平台: true,
    银行: true,
    其它: true,
  });

  // 点击展开箭头
  const handleItemArrowPress = section => {
    const originShowArrow = JSON.parse(JSON.stringify(showArrow));

    originShowArrow[section.title] = !originShowArrow[section.title];
    setShowArrow(originShowArrow);
    LayoutAnimation.easeInEaseOut();
  };

  // 编辑账号
  const handleEditAccount = (item, section) => {
    handleEditAccountInfo(item, section);
  };

  // 长按删除账号
  const handleItemDelete = (item, section) => {
    Alert.alert('删除提示', '确认删除账号信息?', [
      {
        text: '取消',
        onPress: () => {},
      },
      {
        text: '确认',
        onPress: () => handleDeleteAccount(item, section),
      },
    ]);
  };

  // 渲染项目模块
  const renderItem = ({item, index, section}) => {
    const styles = StyleSheet.create({
      row: {
        // todo 展开收起的第一中实现思路
        display: showArrow[section.title] ? 'flex' : 'none',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: '#eee',

        backgroundColor: 'white',
      },
      topTitle: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
      },
      bottomAccount: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      },
    });

    return (
      <TouchableOpacity
        style={[styles.row, LayoutAnimation.Presets.spring]}
        activeOpacity={0.5}
        onPress={() => handleEditAccount(item, section)}
        onLongPress={() => handleItemDelete(item, section)}>
        <View>
          <View>
            <Text style={styles.topTitle}>{item.name}</Text>
          </View>
          <View style={styles.bottomAccount}>
            <Text>账号：{item.account}</Text>
            <Text>密码：{item.password}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  // 渲染项目头部
  const renderSectionHeader = ({section}) => {
    return (
      <View
        style={[
          styles.titleHeaderStyle,
          {
            borderBottomLeftRadius: showArrow[section.title] ? 0 : 20,
            borderBottomRightRadius: showArrow[section.title] ? 0 : 20,
          },
        ]}>
        <Image
          // !这样写无效
          // source={require(`../../../../assets/images/icon_${
          //   mapAccountTypeToIcon[section.title]
          // }.png`)}
          source={mapAccountTypeToIcon[section.title]}
          style={styles.accountImgStyle}
        />
        <Text style={styles.titleStyle}>{section.title}</Text>
        <TouchableOpacity
          style={[
            styles.arrowWrapperStyle,
            {
              transform: [
                {
                  rotate: showArrow[section.title] ? '0deg' : '-90deg',
                },
              ],
            },
          ]}
          activeOpacity={0.5}
          onPress={() => handleItemArrowPress(section)}>
          <Image
            source={require('../../../../assets/images/icon_arrow.png')}
            style={[styles.arrowStyle]}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <SectionList
        style={{paddingHorizontal: 15}}
        sections={accountList}
        keyExtractor={(item, index) => item.id + '' + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}></SectionList>
    </>
  );
};

const styles = StyleSheet.create({
  titleHeaderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,

    backgroundColor: 'white',
  },
  titleStyle: {
    marginLeft: 15,
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountImgStyle: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  arrowWrapperStyle: {
    position: 'absolute',
    right: 0,
    padding: 8,
  },
  arrowStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default AccountList;
