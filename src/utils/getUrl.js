const host = window.location.host;
let url = 'https://sta.loohoo.com/';
// let url='https://api.rlma.cn/';
// let url='https://sta.rlma.cn/';

if(host.indexOf('localhost') != -1){
    url = 'https://sta.rlma.cn/';
    // url = 'https://api.rlma.cn/';
}

export default url;
