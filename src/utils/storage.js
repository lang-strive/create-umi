const Main = {
  //存储
  set(key, value) {
    if (value === undefined) {
      return this.remove(key);
    };
    if (value instanceof Object) {
      window.localStorage.setItem(key, JSON.stringify(value));
    } else {
      window.localStorage.setItem(key, value);
    }

  },

  //获取
  get(key) {
    let store = window.localStorage.getItem(key)
    return (store != null ? store : null)
  },

  //移除
  remove(key) {
    window.localStorage.removeItem(key);
  },

  //清空
  clear() {
    window.localStorage.clear();
  },

  //索引值
  key(i) {
    return window.localStorage.key(i);
  },

  //遍历
  each(fn) {
    for (var i = 0; i < window.localStorage.length; i++) {
      fn.call(this, window.localStorage.key(i), JSON.parse(window.localStorage.getItem(window.localStorage.key(i))));
    };
  }
}
export default Main