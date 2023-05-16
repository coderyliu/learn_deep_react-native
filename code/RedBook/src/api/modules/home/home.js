import lyRequest from '../../index';

// 请求首页发现列表
export const getHomeFindListFetch = payload => {
  return lyRequest.request({
    url: '/home/find/list',
    method: 'get',
    params: payload,
  });
};
