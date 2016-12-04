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
                var sb3='sb33';
                alert(sb3);
            }
/**基础
 * 标识符开头：字母，_,$;区分大小写
 * 关键字，保留字，true，false，null不能用于标识符
 * 常量：数字，'字符串'，正则表达式，布尔值，null，｛x:1,y:2｝对象表达式，[1,2,3]数组表达式
 * var 声明变量 var search='search';
 */
var box='box';
alert(box);

/**数据类型
 * typeof 检测数据类型
 * 包括undefined，boolean，string，number，object（对象或null），function（函数）
 * 变量尽可能赋值，可以赋值为null，0（数字），true（布尔值）
 * undefined派生自null，规范中说明undefined==null返回为true
 * ===为数据类型也相等
 * True和False不是布尔值，因为区分大小写
 * Boolean()函数可以用于将其他类型转换为布尔值 比如条件语句的判断就相当于用了该函数
 * undefined为false
 * 八进制：022（第一位是0，其他0-7），十六进制：0x2D（第一二位为0x，其他0-F，可大小写）
 * 浮点数：有小数点就是浮点数
 * 科学计数法：4.21e3（*1000），4.21e-3（0.001）
 * MIN_VALUE，最小数字，-infinity，负无穷，isFinite()函数
 * NaN，非数值 NaN==NaN 不相等 isNaN()函数
 * Number()所有类型转为数字，parseInt()转字符串中的数字，只能是数字开头的，遇到其他字符转义结束parseFloat()转浮点数
 * 字符串：''和""没有区别，但必须成对
 * 转义字符：\n,\t,\b,
 * toString()转成字符 var box=1990;var box2=box.tosString();
 * String()可以转换null和undefined
 * Object建议使用new来创建，new Object();
 */


