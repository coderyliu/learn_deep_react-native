import React, {memo, useCallback, useEffect, useState} from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {View, StyleSheet} from 'react-native';

import {
  changeCurrentPageAction,
  fetchFindData,
} from '../../store/modules/main/home';

import CardList from './c-cpns/card-list';
import TitleBar from './c-cpns/title-bar';

const Home = memo(() => {
  const [currentTab, setCurrentTab] = useState('发现');

  // redux相关
  const {findList, findTotal, categoryType, currentPage} = useSelector(
    state => ({
      findTotal: state.home.findTotal,
      findList: state.home.findList,
      categoryType: state.home.categoryType,
      currentPage: state.home.currentPage,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFindData({type: categoryType, limit: currentPage * 20}));
  }, [dispatch, categoryType, currentPage]);

  const loadMore = useCallback(() => {
    if (currentPage >= findTotal) return;

    dispatch(changeCurrentPageAction(currentPage + 1));
  }, [dispatch, currentPage, findTotal]);

  const handleTabChange = useCallback(
    tab => {
      setCurrentTab(tab);
    },
    [currentTab],
  );

  return (
    <View style={styles.root}>
      {/* 顶部导航栏 */}
      <TitleBar currentTab={currentTab} onTabChange={handleTabChange} />
      {/* 列表 */}
      {currentTab === '发现' && (
        <CardList
          cardList={findList}
          cateType={categoryType}
          loadMore={loadMore}
        />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingBottom: 10,
    backgroundColor: '#eee',
  },
});

export default Home;
