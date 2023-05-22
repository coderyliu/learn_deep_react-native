import lyRequest from '../..';

// 请求商品列表
export const getGoodsListFetch = payload => {
  return lyRequest.request({
    baseURL: 'http://10.3.80.15:7001',
    url: '/goods/goodsList',
    params: payload,
  });
};

// 请求商品分类
export const getGoodsCategoryFetch = () => {
  return lyRequest.request({
    baseURL: 'http://10.3.80.15:7001',
    url: '/goods/top10Category',
  });
};
