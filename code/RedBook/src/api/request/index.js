import axios from 'axios';

import {PRO_BASE_URL, DEV_BASE_URL, TIMEOUT} from './config';

class AppRequest {
  constructor(baseurl, timeout) {
    this.instance = axios.create({
      baseURL: baseurl,
      timeout,
    });

    // 请求拦截器
    this.instance.interceptors.request.use(
      config => {
        return config;
      },
      err => {
        return Promise.reject(err);
      },
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      res => {
        return res.data;
      },
      err => {
        return Promise.reject(err);
      },
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.request({...config, method: 'get'});
  }

  post(config) {
    return this.request({...config, method: 'post'});
  }
}

export default new AppRequest(DEV_BASE_URL, TIMEOUT);
