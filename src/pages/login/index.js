import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router'
import queryString from "query-string"
import { Button } from 'antd';
import styles from './login.less';
import SparkMD5 from 'spark-md5';
import Storage from '../../utils/storage';
import DocumentTitle from 'react-document-title';

const Login=({login,dispatch})=> {
  const {

  }=login;

  return (
    <DocumentTitle title="login">
      <div>login</div>
    </DocumentTitle>
  );
}

const mapStateToProps=(state)=>{
  return state;
}

export default connect(mapStateToProps)(Login);

