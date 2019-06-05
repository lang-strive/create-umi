import queryString from 'query-string';
import modelExtend from 'dva-model-extend';
import { pageModel } from "../../utils/model";
import { Toast , ListView } from 'antd-mobile';
import Storage from '../../utils/storage';
import {routerRedux} from 'dva/router';
import { } from '../../services/app';

export default modelExtend(pageModel,{
  
  namespace: 'home',

  state: {
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen((location) => {
        if (location.pathname == '/home') {
          const searchPayload=location.search&&queryString.parse(location.search)||{};
          const { }=searchPayload;
        }
      })
    },
  },

  effects: {

  },

  reducers: {

  },

})
