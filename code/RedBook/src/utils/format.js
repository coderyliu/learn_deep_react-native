import dayjs from 'dayjs';

// 时间格式化
export const formatTime = (timestamp, type = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(timestamp).format(type);
};
