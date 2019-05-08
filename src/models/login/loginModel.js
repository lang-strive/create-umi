import queryString from 'query-string';
import modelExtend from 'dva-model-extend';
import { pageModel } from "../../utils/model";
import { Toast } from 'antd-mobile';
import Storage from '../../utils/storage';
import { } from '../../services/app';
import {routerRedux} from 'dva/router';

export default modelExtend(pageModel,{
  
  namespace: 'login',

  state: {

  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname == '/login') {
          const searchPayload=location.search&&queryString.parse(location.search)||{};
          const {}=searchPayload;
          
        }
      })
    },
  },

  effects: {
    // * getAppLogin({ payload }, { call, put, select }) {
    //   const result = yield call(getAppLogin, payload)
    //   console.log(result);
    //   if(result&&result.code==1000){
    //     yield Storage.set('token',result.data&&result.data.token); //存token
    //     yield Toast.success('登录成功!', 2);
    //     yield Storage.set('date',dateFns&&dateFns.format(new Date(),'YYYY-MM'));
    //     yield Storage.set('time',new Date().getTime());
    //     yield put(routerRedux.replace('/home'));

    //   }
    // }

  },

  reducers: {

  },

})
