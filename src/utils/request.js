import fetch from 'dva/fetch';
import { routerRedux } from 'dva/router';
import url from "./getUrl";
import Storage from "./storage";
import { router } from 'umi';
import { Toast } from "antd-mobile";
import SparkMD5 from 'spark-md5';

function reLoggedIn() {
  router.replace('/login');
}
function parseJSON(response) {
  return response.json();
}
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}
function handleData(data = {}) {
  switch (data.code) {
    case 0:
      Toast.fail(data && data.message, 2);
      reLoggedIn()
      return {}
    case 101:
      Toast.fail(data && data.message, 2);
      reLoggedIn()
      return {}
    case 1000:
      return data;
    // case 101:
    //   reLoggedIn()
    //   return Toast.fail(data && data.message, 2);
    default:
      Toast.fail(data && data.message, 2);
      return {}
  }
}
function handleErr(data) {
  Toast.fail(data && data.message, 2);
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(pathname, options) {
  const token = Storage.get('token');
  const object = {}
  const staticPathname = pathname;

  const random=Math.random().toString(32).substr(2);
  const getTime=()=>parseInt(new Date().getTime()/1000);
  const headers={
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'token': token,

    'r': random,
    's': staticPathname,
    't': getTime(),
    'ss': SparkMD5.hash(`r=${random}&s=${staticPathname}&t=${getTime()}&key=Yu2f+fo~V$-8CPFI(*ic,~byuT6E~$wa`)
  }

  if (options.method === 'GET') {
    let paramsArray = [];
    //拼接参数
    let params = options.body
    Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
    if (url.search(/\?/) === -1) {
      if (paramsArray.length)
        pathname += '?' + paramsArray.join('&')
    } else {
      pathname += '&' + paramsArray.join('&')
    }

    object = {
      method: options.method,
      headers,
    }
  } else {

    object = {
      method: options.method,
      headers,
      body: JSON.stringify(options.body)
    }
  }

  return fetch(url + pathname, object)
    .then(checkStatus)
    .then(parseJSON)
    .then(handleData)
    .catch(handleErr)
}
