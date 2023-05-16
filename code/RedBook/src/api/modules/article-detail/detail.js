import lyRequest from '../..';

// 请求笔记内容详情
export const getArticleDetailFetch = id => {
  return lyRequest.request({
    url: `/article/detail/info/${id}`,
    method: 'get',
  });
};
