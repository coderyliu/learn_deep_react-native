import React, {memo, useCallback, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet} from 'react-native';
import {
  changeCurrentPageAction,
  fetchGoodsData,
  fetchGoodsList,
} from '../../store/modules/shop';
import ShopNavBar from './c-cpns/nav-bar';
import ListContent from './c-cpns/list-content';

const Shop = memo(() => {
  // redux
  const {cateList, goodsList, currentPage, goodsTotal} = useSelector(
    state => ({
      cateList: state.shop.cateList,
      goodsList: state.shop.goodsList,
      goodsTotal: state.shop.goodsTotal,
      currentPage: state.shop.currentPage,
    }),
    shallowEqual,
  );
  const dispatch = useDispatch();

  // 请求不变内容
  useEffect(() => {
    dispatch(fetchGoodsData());
  }, [dispatch]);

  // 请求商品列表
  useEffect(() => {
    dispatch(fetchGoodsList({page: currentPage, size: 10}));
  }, [dispatch, currentPage]);

  const handleLoadData = useCallback(() => {
    if (currentPage >= goodsTotal) return;
    dispatch(changeCurrentPageAction(currentPage + 1));
  }, [dispatch, currentPage]);

  return (
    <View style={styles.root}>
      {/* 顶部搜索栏 */}
      <ShopNavBar />
      {/* 内容区 */}
      <ListContent
        goodsList={goodsList}
        cateList={cateList}
        onLoadData={handleLoadData}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
});

export default Shop;
