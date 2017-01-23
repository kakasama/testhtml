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

// 使用console.log来调试吧，比较安全
/* 用于调试的输出
function myFunction() {
   	document.write(Date());
}
function myFunction(a, b) {
   	return a * b;                                // 返回 a 乘于 b 的结果
}
document.getElementById("demo").innerHTML="段落已修改。";
*/

/*
break	用于跳出循环。
catch	语句块，在 try 语句块执行出错时执行 catch 语句块。
continue	跳过循环中的一个迭代。
do ... while	执行一个语句块，在条件语句为 true 时继续执行该语句块。
for	在条件语句为 true 时，可以将代码块执行指定的次数。
for ... in	用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。
function	定义一个函数
if ... else	用于基于不同的条件来执行不同的动作。
return	退出函数
switch	用于基于不同的条件来执行不同的动作。
throw	抛出（生成）错误 。
try	实现错误处理，与 catch 一同使用。
var	声明一个变量。
while	当条件语句为 true 时，执行语句块。
*/

/* 常见的HTML事件
onchange	HTML 元素改变
onclick	用户点击 HTML 元素
onmouseover	用户在一个HTML元素上移动鼠标
onmouseout	用户从一个HTML元素上移开鼠标
onkeydown	用户按下键盘按键
onload	浏览器已完成页面的加载
*/

//正则表达式
//参考RegExp对象

//Arguments 对象
//还不懂做什么用的
//JavaScript 闭包 没看懂。。。。

//通过id获取元素和通过标签名找到元素
//var x=document.getElementById("main");
//var y=x.getElementsByTagName("p");
//通过类名找到元素
//var x=document.getElementsByClassName("intro");

//改变html
//document.getElementById(id).innerHTML=新的 HTML
//绝对不要在文档加载完成之后使用 document.write()。这会覆盖该文档。
//改变元素属性
//document.getElementById(id).attribute=新属性值
//改变元素样式
//document.getElementById(id).style.property=新样式

//onload 和 onunload 事件可用于处理 cookie
//<body onload="checkCookies()">
/*
function checkCookies(){
	if (navigator.cookieEnabled==true){
		alert("Cookies 可用")
	}
	else{
		alert("Cookies 不可用")
	}
}
*/
//onchange 事件常结合对输入字段的验证来使用。
//<input type="text" id="fname" onchange="upperCase()">
//onmouseover 和 onmouseout 事件可用于在用户的鼠标移至 HTML 元素上方或移出元素时触发函数。

//addEventListener() 方法
//document.getElementById("myBtn").addEventListener("click", displayDate);
//感觉这种比较常用，你可以使用 removeEventListener() 方法来移除事件的监听。
//element.addEventListener(event, function, useCapture);event注意:不要使用 "on" 前缀。 例如，使用 "click" ,而不是使用 "onclick"

/*
事件传递定义了元素事件触发的顺序。 如果你将 <p> 元素插入到 <div> 元素中，用户点击 <p> 元素, 哪个元素的 "click" 事件先被触发呢？
在 冒泡 中，内部元素的事件会先被触发，然后再触发外部元素，即： <p> 元素的点击事件先触发，然后会触发 <div> 元素的点击事件。
在 捕获 中，外部元素的事件会先被触发，然后才会触发内部元素的事件，即： <div> 元素的点击事件先触发 ，然后再触发 <p> 元素的点击事件。
addEventListener() 方法可以指定 "useCapture" 参数来设置传递类型：
addEventListener(event, function, useCapture);
默认值为 false, 即冒泡传递，当值为 true 时, 事件使用捕获传递。
document.getElementById("myDiv").addEventListener("click", myFunction, true);
*/

//向 HTML DOM 添加新元素，您必须首先创建该元素（元素节点），然后向一个已存在的元素追加该元素
/*
<script>
var para=document.createElement("p");
var node=document.createTextNode("这是一个新段落。");
para.appendChild(node);

var element=document.getElementById("div1");
element.appendChild(para);
</script>
*/
//删除元素
/**
<script>
var parent=document.getElementById("div1");
var child=document.getElementById("p1");
parent.removeChild(child);
</script>
使用其 parentNode 属性来找到父元素：
var child=document.getElementById("p1");
child.parentNode.removeChild(child);
*/

//我发现定义时调用函数不需要带参数和括号，是因为对于js来说实际上都是对象么？

//var patt1 = /runoob/i; var patt1 = /runoob/g; var patt1 = /runoob/ig; i是不区分大小写，g是搜索所有匹配而不是第一个
//用法，使用match,test或exce函数
//1
//var str="Is this all there is?";
//var patt1=/is/ig;
//document.write(str.match(patt1));
/* 2
var patt1=new RegExp("e");
document.write(patt1.test("The best things in life are free"));
 */
/*3
var patt1=new RegExp("e");
document.write(patt1.exec("The best things in life are free"));
 */
/*
所有 JavaScript 全局对象、函数以及变量均自动成为 window 对象的成员。
全局变量是 window 对象的属性。
全局函数是 window 对象的方法。
甚至 HTML DOM 的 document 也是 window 对象的属性之一：

screen.availWidth 属性返回访问者屏幕的宽度，以像素计，减去界面特性，比如窗口任务栏。
screen.availHeight 属性返回访问者屏幕的高度，以像素计，减去界面特性，比如窗口任务栏。

location.hostname 返回 web 主机的域名
location.pathname 返回当前页面的路径和文件名
location.port 返回 web 主机的端口 （80 或 443）
location.protocol 返回所使用的 web 协议（http:// 或 https://）
location.href 属性返回当前页面的 URL
location.assign() 方法加载新的文档

history.back() - 与在浏览器点击后退按钮相同
history.forward() - 与在浏览器中点击按钮向前相同


浏览器检测
由于 navigator 可误导浏览器检测，使用对象检测可用来嗅探不同的浏览器。
由于不同的浏览器支持不同的对象，您可以使用对象来检测浏览器。
例如，由于只有 Opera 支持属性 "window.opera"，您可以据此识别出 Opera。

可以在 JavaScript 中创建三种消息框：警告框、确认框、提示框。
window.alert("sometext");
window.confirm() 方法可以不带上window对象，直接使用confirm()方法。
window.prompt("sometext","defaultvalue");
window.prompt() 方法可以不带上window对象，直接使用prompt()方法。

setInterval() - 间隔指定的毫秒数不停地执行指定的代码。
window.setInterval("javascript function",milliseconds);
第一个参数是函数（function）。
第二个参数间隔的毫秒数
clearInterval() 方法用于停止 setInterval() 方法执行的函数代码。
window.clearInterval(intervalVariable)
window.clearInterval() 方法可以不使用window前缀，直接使用函数clearInterval()。
要使用 clearInterval() 方法, 在创建计时方法时你必须使用全局变量：

setTimeout() - 暂停指定的毫秒数后执行指定的代码
window.setTimeout("javascript 函数",毫秒数);
setTimeout() 方法会返回某个值。
第一个参数是含有 JavaScript 语句的字符串。
第二个参数指示从当前起多少毫秒后执行第一个参数。
clearTimeout() 方法用于停止执行setTimeout()方法的函数代码。
window.clearTimeout(timeoutVariable)
window.clearTimeout() 方法可以不使用window 前缀。
要使用clearTimeout() 方法, 你必须在创建超时方法中（setTimeout）使用全局变量:
如果函数还未被执行，你可以使用 clearTimeout() 方法来停止执行函数代码。

Note: setInterval() 和 setTimeout() 是 HTML DOM Window对象的两个方法。

Cookie 用于存储 web 页面的用户信息
Cookie 是一些数据, 存储于你电脑上的文本文件中。
当 web 服务器向浏览器发送 web 页面时，在连接关闭后，服务端不会记录用户的信息。
Cookie 的作用就是用于解决 "如何记录客户端的用户信息":
当用户访问 web 页面时，他的名字可以记录在 cookie 中。
在用户下一次访问该页面时，可以在 cookie 中读取用户访问记录。
Cookie 以名/值对形式存储，如下所示:
username=John Doe
当浏览器从服务器上请求 web 页面时， 属于该页面的 cookie 会被添加到该请求中。服务端通过这种方式来获取用户的信息
avaScript 可以使用 document.cookie 属性来创建 、读取、及删除 cookie。
JavaScript 中，创建 cookie 如下所示：
document.cookie="username=John Doe";
您还可以为 cookie 添加一个过期时间（以 UTC 或 GMT 时间）。默认情况下，cookie 在浏览器关闭时删除：
document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT";
您可以使用 path 参数告诉浏览器 cookie 的路径。默认情况下，cookie 属于当前页面。
document.cookie="username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";
使用 JavaScript 读取 Cookie
在 JavaScript 中, 可以使用以下代码来读取 cookie：
var x = document.cookie;
在 JavaScript 中，修改 cookie 类似于创建 cookie，如下所示：
document.cookie="username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";
旧的 cookie 将被覆盖。
使用 JavaScript 删除 Cookie
删除 cookie 非常简单。您只需要设置 expires 参数为以前的时间即可，如下所示，设置为 Thu, 01 Jan 1970 00:00:00 GMT:
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
注意，当您删除时不必指定 cookie 的值。


CDN -内容分发网络
如果许多不同的网站使用相同的 JavaScript 框架，那么把框架库存放在一个通用的位置供每个网页分享就变得很有意义了。
CDN (Content Delivery Network) 解决了这个问题。CDN 是包含可分享代码库的服务器网络。
Google 为一系列 JavaScript 库提供了免费的 CDN

但是由于 Google 在中国经常被GFW（防火长城，英文名称Great Firewall of China，简写为Great Firewall，缩写GFW）屏蔽
造成访问不稳定，所以建议使用百度静态资源公共库。
如需在您的网页中使用 JavaScript 框架库，只需在 <script> 标签中引用该库即可：
引用 jQuery
<script src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js">
</script>

创建 XMLHttpRequest 对象
所有现代浏览器（IE7+、Firefox、Chrome、Safari 以及 Opera）均内建 XMLHttpRequest 对象。
创建 XMLHttpRequest 对象的语法：
variable=new XMLHttpRequest();

与 POST 相比，GET 更简单也更快，并且在大部分情况下都能用。
然而，在以下情况中，请使用 POST 请求：
无法使用缓存文件（更新服务器上的文件或数据库）
向服务器发送大量数据（POST 没有数据量限制）
发送包含未知字符的用户输入时，POST 比 GET 更稳定也更可靠
如需将请求发送到服务器，我们使用 XMLHttpRequest 对象的 open() 和 send() 方法：
xmlhttp.open("GET","ajax_info.txt",true);
xmlhttp.send();
open(method,url,async)	
规定请求的类型、URL 以及是否异步处理请求。
method：请求的类型；GET 或 POST
url：文件在服务器上的位置
async：true（异步）或 false（同步）
send(string)	
将请求发送到服务器。
string：仅用于 POST 请求

get请求可能得到的是缓存的结果，为了避免这种情况，向URL添加一个唯一的ID 
xmlhttp.open("GET","/try/ajax/demo_get.php?t=" + Math.random(),true);
xmlhttp.send();

如果需要像 HTML 表单那样 POST 数据，请使用 setRequestHeader() 来添加 HTTP 头。然后在 send() 方法中规定您希望发送的数据：
xmlhttp.open("POST","/try/ajax/demo_post2.php",true);
xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xmlhttp.send("fname=Henry&lname=Ford");


*/

// VUE
var vm = new Vue({})

