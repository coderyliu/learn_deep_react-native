import React, {memo, useCallback, useEffect, useRef} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, ScrollView, Image} from 'react-native';

import {
  changeCurrentPageAction,
  fetchUserInfo,
  fetchUserNoteList,
} from '../../store/modules/mine/person';
import icon_mine_bg from '../../assets/images/icon_mine_bg.png';

import TitleBar from './c-cpns/title-bar';
import PersonInfo from './c-cpns/person-info';
import ListBar from './c-cpns/list-bar';
import ListContent from './c-cpns/list-content';
import SideMenu from './c-cpns/side-menu';

const Mine = memo(() => {
  const sideMenuRef = useRef();

  const {
    userInfo,
    currentTab,
    currentPage,
    noteList,
    noteTotal,
    collectList,
    collectTotal,
    likeList,
    likeTotal,
  } = useSelector(
    state => ({
      userInfo: state.person.userInfo,
      currentTab: state.person.currentTab,
      currentPage: state.person.currentPage,
      collectList: state.person.collectList,
      collectTotal: state.person.collectTotal,
      likeList: state.person.likeList,
      likeTotal: state.person.likeTotal,
      noteList: state.person.noteList,
      noteTotal: state.person.noteTotal,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  // 请求个人信息
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  // 请求笔记列表
  useEffect(() => {
    switch (currentTab) {
      case 'note':
        dispatch(
          fetchUserNoteList({
            type: 'note',
            payload: {limit: currentPage * 20, offset: 0},
          }),
        );
        break;
      case 'collect':
        dispatch(
          fetchUserNoteList({
            type: 'collect',
            payload: {limit: currentPage * 20, offset: 0},
          }),
        );
        break;
      case 'like':
        dispatch(
          fetchUserNoteList({
            type: 'like',
            payload: {limit: currentPage * 20, offset: 0},
          }),
        );
        break;
      default:
        dispatch(
          fetchUserNoteList({type: 'note', payload: {limit: 20, offset: 0}}),
        );
        break;
    }
  }, [dispatch, currentTab, currentPage]);

  const loadMore = useCallback(() => {
    dispatch(changeCurrentPageAction(currentPage + 1));
  }, [dispatch, currentPage]);

  const handleSideMenuPress = useCallback(() => {
    sideMenuRef.current.show();
  }, [sideMenuRef.current]);

  return (
    <View style={styles.root}>
      <Image source={icon_mine_bg} style={styles.iconBgStyle} />
      <TitleBar onSideMenuPress={handleSideMenuPress} />
      <ScrollView>
        <PersonInfo userInfo={userInfo} />
        <ListBar currentTab={currentTab} />
        <ListContent
          listData={
            currentTab === 'note'
              ? noteList
              : currentTab === 'collect'
              ? collectList
              : likeList
          }
          loadMore={loadMore}
        />
      </ScrollView>
      <SideMenu ref={sideMenuRef} />
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  iconBgStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    height: 340,
  },
});

export default Mine;
