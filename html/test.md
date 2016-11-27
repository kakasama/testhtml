# md使用快捷指南
* [指南](http://wowubuntu.com/markdown/#list)
* [指南2](http://www.appinn.com/markdown/)
## 常用快捷键
* 标题
  * 使用#,最多六个，比如
    >>## 2号标题
  * 使用=和-可以设置两级标题
    >>一号标题
    >>=======
    >>二号标题
    >>-------

* 引用
  >这就是一个引用
  >>多级引用

* 列表
  * 使用*，+，-都可以用来表示无序列表
    >* 列表1
    >- 列表2
    >+ 列表3

  * 使用数字加半角句号可以表示有序列表
    >1. 有序1
    >2. 有序2
    >3. 有序3
* 代码区块
  * 使用````using````或者四个空格一个tab  
  在列表里要加倍和莫名的空行,建议还是用\````吧   
  就可以高亮代  
  顺便加两个空格之后回车才能换行  

          using namespace

  * 或者这样

  ````
  <html title="标题"><br>
  <meta charset="UTF-8">
    <head>
       <title>nothing left</title>
        <!--css-->
        <style type="text/css"></style>
    </head>
  <body></body>
  ````
* 其他待补充


# git快捷键
## 指南
* [github上的使用指南](http://rogerdudler.github.io/git-guide/index.zh.html)
* [官方指南](https://git-scm.com/book/zh/v2)
***
## 常用快捷键
* 提交代码到github或者其他远程服务器上  
  git push origin master
* 更新代码到本地  
  git pull
* 克隆仓库  
  git clone /path/to/repository  
  git clone username@host:/path/to/repository  
* 提交到暂存区  
  git add <filename>  
  git add *  
* 提交实际改动  
  git commit -m "代码提交信息"
***
## 其他问题
* 已经安装了，但在vs code中提示未安装
  >需要添加环境变量Git/bin和Git\libexec\git-core  
  >添加的位置为环境变量的path下，用";"隔开每个路径  
  >win10下的编辑界面已经可以不需要";"来隔开了  
  >然后重启vs code，搞定

  
---
# cmd备注笔记
## 快捷键
* [参考连接](http://blog.csdn.net/yeliping2011/article/details/7210700)

# vps和ss相关笔记
* vps提速优化  
  * [参考链接](http://www.jianshu.com/p/41de7de06c37)
* ss安装后启动失败问题
  * 把SS删除
  * 点Root Shell-Advanced
  * 输入：yum update 
  * 点execute
  * 然后重新安装ss  
  * 这样做的目的是更新整个系统，懒办法
* pac文件编辑
  * [参考链接](http://www.tuicool.com/articles/V77jyu)  

# vscode使用记录
## 快捷键
* 快捷键指南  
  * [参考连接]()

## 常用插件

## 调试

## git