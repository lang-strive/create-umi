import styles from './index.less';

const BasicLayout=(props)=> {
  return (
    <div className={styles.normal}>
      {props.children}
    </div>
  );
}

export default BasicLayout;
