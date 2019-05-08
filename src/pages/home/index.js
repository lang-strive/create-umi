import React from 'react';
import { connect } from 'dva';
import { routerRedux } from 'dva/router'
import queryString from "query-string"
import styles from './home.less';
import { Button } from 'antd'
import DocumentTitle from 'react-document-title';
import classNames from 'classnames/bind';
import Storage from '../../utils/storage';
import { } from '../../utils/tools';
import dateFns from 'date-fns';
const cx=classNames.bind(styles);


class Home extends React.Component{
  constructor(props){
    super(props);
    this.state={

    };

  }

  componentDidMount(){

  }

  componentDidUpdate(){

  }

  render(){
    const { home , dispatch } = this.props;
    const { 

    } = this.state;

    return (
      <DocumentTitle title="home">
        <div className={styles.home}>
          home
        </div>
      </DocumentTitle>
    )
  }
}

const mapStateToProps=(state)=>{
  return state;
}

export default connect(mapStateToProps)(Home);
