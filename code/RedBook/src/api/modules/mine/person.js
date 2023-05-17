import lyRequest from '../..';

// 请求个人信息
export const getUserInfoFetch = () => {
  return lyRequest.request({
    url: '/user/info',
  });
};

// 请求用户收藏笔记列表
export const getUserCollectListFetch = payload => {
  return lyRequest.request({
    url: '/user/note/collect/list',
    params: payload,
  });
};

// 请求用户点赞笔记列表
export const getUserLikeListFetch = payload => {
  return lyRequest.request({
    url: '/user/note/like/list',
    params: payload,
  });
};

// 请求用户个人笔记列表
export const getUserNoteListFetch = payload => {
  return lyRequest.request({
    url: '/user/note/list',
    params: payload,
  });
};
