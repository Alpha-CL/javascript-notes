#

#### global variable & id

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/**
 * global variable              // 全局变量
 * 
 * 
 * 声明一个全局变量, 不仅会创建一个 全局变量, 而且还会在 global 对象中创建一个 同名属性
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * id                           // id
 * 
 * 
 * 浏览器历史遗留问题: 创建带有 id 的 DOM 元素时, 也会创建同名的 全局变量
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### don't extend native prototype methods

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 不要扩展原生原型( 不要扩展原生方法, 除非确定代码在运行环境中不会有冲突 )

向原生原型中加入了新的方法, 但无法保证之后 js 规范不会出现同名的属性或方法


//-------------------------------------------------------------------------------------------------------------------//


// shim / polyfill

在老版本中的运行环境中扩展原生方法是唯一安全的
因为环境不太可能发生变化, 支持新规范的浏览器会完全替代老版本浏览器, 而非在老版本上扩展


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// polyfill

有效地为不符合最新规范的老版本浏览器填补缺失的功能


// 判断当前版本是否支持该功能
if(!Array.prototype.foobar) {
    
    // 若老版本的浏览器没有该功能, 则定义缺失的该功能
    Array.prototype.foobar = funcution() {
    
        this.push('foo', 'bar');
    };
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// shim


ES5-shim: Javascript ES5 基本规范支持 
                    / \
                   /   \
                    | |
            Traceur: 切换新旧语法
                    | |
                   \   /
                    \ /
ES6-shim: Javascript ES6 基本规范支持


//-------------------------------------------------------------------------------------------------------------------//



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### <script>

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// script link


外部文件引用: <script src="filePath"/>

内联代码块: <script>...</script>


//-------------------------------------------------------------------------------------------------------------------//

// 外部文件引用

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


<script src=""/>                    // 通常使用该方法加载文件


多个 <script> 标签 共享同一个 global 对象( 浏览器: window )
多个 <script> 标签 在共享的命名空间中运行, 并且互相交互

若某个 <script> 标签 定义了  foo(); 则后面的 <script> 标签就可以 访问/调用 foo();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


<script src="file_01"/>             // 若 file_01 中定义了 foo(), 则后面引用的文件都可以访问和调用该方法
<script src="file_02"/>
<script src="file_03"/>


//-------------------------------------------------------------------------------------------------------------------//

// 内联代码块

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 每个 <script>...</script> 都是独立的
// 但后续的 <script src="file_03"/> 依然


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


<script src="file_01"/>             // 若 file_01 中定义了 foo(), 则后面引用的文件都可以访问和调用该方法
                                    // 但后面定义的 <script>...</script> 中却不能访问
<script src="file_02"/>
<script src="file_03"/>

<script>

foo();                              // undefined

</script>


//-------------------------------------------------------------------------------------------------------------------//


// 外部文件引用 vs 内联代码块


内联代码块中不可以出现 </script> 字符串, 一旦出现则视为 script 代码块结束

外部文件引用是根据代码文件的字符集属性( UTF8, ISO-8859-8 等 )解析外部文件中的代码
内联代码块是使用页面文件的字符集( 默认字符集 )解析代码块中的代码


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### reserved word

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 关键字, 预留关键字, null, true/false

尽量避免使用保留字作为对象属性名等使用


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### 

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


javascript 规范对于 函数中参数的个数, 字符串常量的长度等并没有限制
( 由于 javascript 引擎实现各异,  )


字符串常量中允许的最大字符数( 并非只针对字符串值 )

可以作为参数传递到函数中的数组大小 ( 栈大小: 字节 )

函数声明中的参数与个数 

未经优化的调用栈( eg: 递归 )的最大层数, 即函数调用链的最大长度

javascript 程序以组use方式在刘啦安琪中运行的最长时间( 秒 )

变量名的最大长度                                                    // 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

### promise

####

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// 调用回调过早

一个任务 有时同步完成, 有时异步完成, 可能会导致 竞态条件


// 调用回调过晚

当 Promise 创建


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//



调用回调次数过少或过多

未能传递所需的环境和参数

吞掉看可能出现的错误和异常






///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

####

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 
 * 
 * 
 * 
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

####

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 
 * 
 * 
 * 
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```




