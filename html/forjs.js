document.write("<h1>This is a heading</h1>");
document.write("<p>This is a paragraph</p>");


// ss代理用的js代码，还没看明白
var domains = {
    "google.com": 1,  
};

var proxy = "__PROXY__";

var direct = 'DIRECT;';

var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
    var suffix;
    var pos = host.lastIndexOf('.');
    pos = host.lastIndexOf('.', pos - 1);
    while(1) {
        if (pos <= 0) {
            if (hasOwnProperty.call(domains, host)) {
                return proxy;
            } else {
                return direct;
            }
        }
        suffix = host.substring(pos + 1);
        if (hasOwnProperty.call(domains, suffix)) {
            return proxy;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}


// 我现在看的这个课程推荐用Hbuider
// js组成 
// ECMAscript5.1：js的语法和基本对象
// DOM：文档对象模型，描述处理网页内容的方法和接口
// BOM：浏览器对象模型，描述与浏览器交互的方法和接口
// 出现位置：行间，内嵌，外链
 document.getElementById('btn3').onclick=function(){
                alert('sb3');
            }

