const toDou=(n)=>{
    return n<10?'0'+n:''+n;
}

export const getDate=()=>{
    let oDate=new Date();
    let oY=oDate.getFullYear();
    let oM=oDate.getMonth()+1;
    let oD=oDate.getDate();
    
    return `${toDou(oY)}-${toDou(oM)}-${toDou(oD)}`;
}

//高亮
export const highlight = (txt,searchTxt) => {
 
    return txt.split('').map(name => {
      if (searchTxt.toUpperCase().indexOf(name.toUpperCase())>=0) {
        return {
          name,
          iShighlight: true
        }
      }
      return {
        name,
        iShighlight: false
      }
    })
}


//文档高度
export function getDocumentTop() {
  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if (document.body) {
      bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}


//可视窗口高度
export function getWindowHeight() {
  var windowHeight = 0;
  if (document.compatMode == "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight;
  } else {
      windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}


//滚动条滚动高度
export function getScrollHeight() {
  var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
  }

  if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

