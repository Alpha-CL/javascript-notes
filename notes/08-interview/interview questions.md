# interview questions

#### start

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// step_01


1. 自我介绍

2. 简述一个组件化页面，从数据获取到组件渲染的整体逻辑思路过程


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### html

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 常见浏览器内核

Trident: IE 浏览器内核；
Gecko: Firefox 浏览器内核；
Presto: Opera 浏览器内核；
Webkit: Safari 浏览器内核；
Blink: 谷歌浏览器内核，属于 Webkit 的一个分支，与 Opera 一起在研发；


//-------------------------------------------------------------------------------------------------------------------//


如何将一个元素在当前窗口水平垂直居中


//-------------------------------------------------------------------------------------------------------------------//


BFC（Block Format Context）块级格式化上下文，是页面盒模型中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响

- 创建 BFC 的方式有：

    html 根元素
    float 浮动
    绝对定位
    overflow 不为 visible
    display 为表格布局或者弹性布局；

- BFC 主要的作用是

    清除浮动
    防止同一 BFC 容器中的相邻元素间的外边距重叠问题


//-------------------------------------------------------------------------------------------------------------------//


html

    - 常规流布局( 自上而下，从左到右 ): 元素脱离常规流后无法撑开父元素
    
    - 定位( float & position )


//-------------------------------------------------------------------------------------------------------------------//


// 页面导入样式时，使用 link 和 @import 有什么区别

1) 从属关系区别。@import 只能导入样式表，link 还可以定义 RSS、rel 连接属性、引入网站图标等

2) 加载顺序区别；加载页面时，link 标签引入的 CSS 被同时加载；@import 引入的 CSS 将在页面加载完毕后被加载

3) 兼容性区别


//-------------------------------------------------------------------------------------------------------------------//


// 浏览器的渲染原理

首先解析收到的文档，根据文档定义构建一颗 DOM 树，DOM 树是由 DOM 元素及属性节点组成的；
然后对 CSS 进行解析，生成 CSSOM 规则树；
根据 DOM 树和 CSSOM 规则树构建 Render Tree。渲染树的节点被称为渲染对象，渲染对象是一个包含有颜色和大小等属性的矩形，渲染对象和 DOM 对象相对应，但这种对应关系不是一对一的，不可见的 DOM 元素不会被插入渲染树。
当渲染对象被创建并添加到树中，它们并没有位置和大小，所以当浏览器生成渲染树以后，就会根据渲染树来进行布局（也可以叫做回流）。这一阶段浏览器要做的事情就是要弄清楚各个节点在页面中的确切位置和大小。通常这一行为也被称为“自动重排”。
布局阶段结束后是绘制阶段，比那里渲染树并调用对象的 paint 方法将它们的内容显示在屏幕上，绘制使用 UI 基础组件。
为了更好的用户体验，渲染引擎会尽可能早的将内容呈现到屏幕上，并不会等到所有的 html 解析完成之后再去构建和布局 render tree。它是解析完一部分内容就显示一部分内容，同时可能还在网络下载其余内容。


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### css

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 分析比较 opacity: 0、visibility: hidden、display: none 优劣和适用场景

1) display: none - 不占空间，不能点击，会引起回流，子元素不影响

2) visibility: hidden - 占据空间，不能点击，引起重绘，子元素可设置 visible 进行显示

3) opacity: 0 - 占据空间，可以点击，引起重绘，子元素不影响


//-------------------------------------------------------------------------------------------------------------------//


响应式的原理是 & rem 使用

media [device] [condition] {}


//-------------------------------------------------------------------------------------------------------------------//


CSS 中哪些属性可以继承？

- 字体系列属性
    font-family
    font-size
    font-weight
    font-style

- 文本系列属性
    text-indent
    text-align
    line-hight
    word-spacing
    letter-spacing
    color

- 其他
    cursor
    visibility


//-------------------------------------------------------------------------------------------------------------------//


// 选择器优先级如何判断

标签选择器、伪元素选择器              1
类选择器、伪类选择器、属性选择器       10
id 选择器                          100
内联样式                           1000

//-------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------------------------------------------------------------------//


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### js

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 客户端缓存的方法都有哪些?

localstorage & sessionStorage


//-------------------------------------------------------------------------------------------------------------------//


    数据类型
    
    什么是包装类
    
    什么时候会发生隐式类型转换

    - es5

    闭包原理，优点缺陷、应用场景 & 垃圾回收
    
        Javascript 具有自动垃圾回收机制，会定期对那些不再使用的变量、对象所占用的内存进行释放，原理就是找到不再使用的变量，然后释放掉其占用的内存
    
    
    this 指向, call/apply
    
    节流，防抖 介绍
    
    缓存


    - es6
    
    promise api & 解决什么问题

    array 工作用常用的方法


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### network

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 从输入URL到页面加载的全过程

浏览器获取用户输入，等待 url 输入完毕，触发 enter 事件；
解析 URL，分析协议头，再分析主机名是域名还是 IP 地址；
如果主机名是域名的话，则发送一个 DNS 查询请求到 DNS 服务器，获得主机 IP 地址；
使用 DNS 获取到主机 IP 地址后，向目的地址发送一个（http/https/protocol）请求，并且在网络套接字上自动添加端口信息（http 80 https 443）；
等待服务器响应结果；
将响应结果（html）经浏览器引擎解析后得到 Render tree，浏览器将 Render tree 进行渲染后显示在显示器中，用户此时可以看到页面被渲染。


//-------------------------------------------------------------------------------------------------------------------//


介绍 HTTPS 握手过程

客户端使用 https 的 url 访问 web 服务器，要求与服务器建立 ssl 连接；
web 服务器收到客户端请求后，会将网站的证书（包含公钥）传送一份给客户端；
客户端收到网站证书后会检查证书的颁发机构以及过期时间，如果没有问题就随机产生一个秘钥；
客户端利用公钥将会话秘钥加密，并传送给服务端，服务端利用自己的私钥解密出会话秘钥；
之后服务器与客户端使用秘钥加密传输；


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### vue

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


vue 的常用 api

生命周期( created vs mounted )

$nextTick();

自定义指令

mixin 和混入组件如何合并谁

组件间的数据传递方式

2.0 vs 3.0 的原理区别


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### end

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


性能优化

- 页面内容方面

通过文件合并、css 雪碧图、使用 base64 等方式来减少 HTTP 请求数，避免过多的请求造成等待的情况；
通过 DNS 缓存等机制来减少 DNS 的查询次数；
通过设置缓存策略，对常用不变的资源进行缓存；
通过延迟加载的方式，来减少页面首屏加载时需要请求的资源，延迟加载的资源当用户需要访问时，再去请求加载；
通过用户行为，对某些资源使用预加载的方式，来提高用户需要访问资源时的响应速度；


//-------------------------------------------------------------------------------------------------------------------//


- 服务器方面

使用 CDN 服务，来提高用户对于资源请求时的响应速度；
服务器端自用 Gzip、Deflate 等方式对于传输的资源进行压缩，减少传输文件的体积；
尽可能减小 cookie 的大小，并且通过将静态资源分配到其他域名下，来避免对静态资源请求时携带不必要的 cookie；


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```