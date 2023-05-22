import lyRequest from '../..';

// 请求消息列表
export const getMessageListFetch = payload => {
  return lyRequest.request({
    baseURL: 'http://10.3.80.15:7001',
    url: '/message/messageList',
    params: payload,
  });
};
