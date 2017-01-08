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