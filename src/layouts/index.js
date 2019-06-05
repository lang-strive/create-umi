import React from 'react';
import styles from './index.less';
import withRouter from 'umi/withRouter';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NProgress from 'nprogress';
import './nprogress.less';
import { connect } from 'dva';
NProgress.configure({ showSpinner: false });
let currHref=new String();


class BasicLayout extends React.Component{

  componentDidMount(){
    console.log('didMount');
    this.getData();
  }

  componentDidUpdate(){
    console.log(111)
    this.getData();
  }
  
  /** 加载条 */
  getData=()=>{
    const {  loading: { global } } = this.props;
    const { href } = window.location; // 浏览器地址栏中地址
    console.log(global);
    console.log(href);

    if (currHref !== href) {
      // currHref 和 href 不一致时说明进行了页面跳转
      NProgress.start(); // 页面开始加载时调用 start 方法
      if (!global) {
        // loading.global 为 false 时表示加载完毕
        NProgress.done(); // 页面请求完毕时调用 done 方法
        currHref = href; // 将新页面的 href 值赋值给 currHref
      }
    }

  }

  render(){
    const {
      children,
      loading,
      location: { pathname },
      route: { routes },
    } = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionName="transitionWrapper"
        component="div"
        className={styles.transitionWrapper}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div
          key={pathname}
          className={styles.normalCom}
        >
          {children}
        </div>
      </ReactCSSTransitionGroup>
    );
  }

}

export default withRouter(connect(({ app, loading }) => ({ app, loading }))(BasicLayout));
