### scope

#### scoped nested

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * scope
 * 
 * 
 * 当 "一个块或函数" 嵌套在 "另一个块或函数" 中时，就发生了 "作用域嵌套"
 */


在当前作用域中无法找到某个变量时，js引擎 会在外层嵌套的作用域中继续查找

直到找到该变量 或 抵达最外层作用域( 全局作用域 )为止


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### scope chain

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 作用域链


LHS 和 RHS 引用会在当当前作用域中查找

若没有找到，则会继续向外层作用域中继续查找

直到找到最外层作用域( 全局作用域 )

若还未找到则抛出错误


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### throw errors

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


RHS 引用查询，若未查到( 说明在任何作用域中都无法找到 )，则为 "未声明" 的变量

抛出 ReferenceError


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


LHS 引用查询，若未找到，则会为其隐式创建全局变量

但若对该变量进行了不合理的操作，则抛出 TypeError

eg: 1) 引用 null || undefined

    2) 对非函数类型的值进行函数调用


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### compile stage

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 作用域工作模式


词法作用域: 

动态作用域: Bash 脚本，Perl 中的一些模式


//-------------------------------------------------------------------------------------------------------------------//


1) 词法阶段

    - 将 源代码 词法化
    
    - 在 词法化 的基础上，进行词法分析( 若是有状态的解析，则会为单词赋予语义 )
    

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


2) 词法作用域            // 寻找定义在词法阶段的作用域
                        // 词法作用域是由书写代码时变量时所在的作用域决定的

    - 当词法分析器处理代码时，会保持作用域不变( 大多数情况 )         // 特殊情况: evel, with ... 


//- -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -//


evel() & with 会在运行时修改或创建新的作用域

js 引擎无法判断 evel() & with 中的词法作用域 


//- -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -//


/**
 * evel(str);           // 修改 书写期 的 词法作用域
 * 
 * 
 * evel 中执行的代码包含一个或多个声明( 无论是 变量/函数 )
 */


setTimeout(); & setInterval(); 的第一个参数可以是字符串，字符串的内容可以被解析为一段动态生成的函数代码( 已过时，勿用 )

new Function(); 创建时，最后一个参数可以接受代码字符串，并将其转化为动态生成的函数


//- -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  - -//


/**
 * with
 * 
 * 
 * 重复引用同一个对象中的多个属性的快捷方式，可以不需要重复引用对象本身
 */

with 可以将一个或多个属性处理为一个完全隔离的词法作用域
该对象的属性也会被处理为定义在这个作用域的词法标识符


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


词法作用域是由书写代码时函数声明的位置决定的

编译时词法分析阶段基本能够判断出标识符属于哪个作用域


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### func/block scope

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 最小授权/最小暴露原则
 * 
 * 
 * 最小限度的暴露必要及内部方法，仅暴露某个必要使用的对象作为接口
 */


"隐藏" 作用域中的变量和函数 可以避免 同名标识符 之间的冲突


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 块级作用域
 * 
 * 
 * { block scope }
 */


let / const             // 绑定声明 到 当前作用域

try ... catch           // 创建 独立的块作用域


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


for (var i = 0; i <  10; i++) {
    console.log(i);
}


// 等价于上面
var i = 0;              // var 并没有将 i 绑定在当前循环的块级作用域，而是外部包裹的作用域
for (; i < 10;) {
    console.log(i);
    i++;
}


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 函数声明 & 函数表达式
 * 
 * 
 * 区别在于名称表达式被绑定在何处
 */


//-------------------------------------------------------------------------------------------------------------------//


// 匿名/具名 函数


1) 匿名函数在栈追踪中不会显示出有意义的函数名

2) 当没有函数名时，若函数需要调用自身，则只能使用已过期的 arguments.callee 引用( eg: 递归 )

3) 匿名删除缺少对代码标识的 可读/理解性


//-------------------------------------------------------------------------------------------------------------------//


(function(global) {         // 将全局变量 window 传递进去并重命名

    var a = 3;
    
    console.log(a);
    
    console.log(global.a);

})(window);

console.log(a);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


undefined = true;

(function(undefined) {      // 设置参数 undefined，但不传递任何值，则该参数的值必然是 undefined

    var a;
    
    if(a === undefined) {
    
        console.log('undefined is safe here!')
    }
})()


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### variable declaration promote

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 变量声明提升           // 编译阶段 -> 执行阶段
 * 
 * 
 * 预编译:   变量或函数等 "所有声明" 会在代码被执行前首先被处理
 * 代码执行: 声明本身会被提升，包括函数表达式( 赋值操作并不会被提升 )
 */


定义声明: 在编译阶段进行的                          // var a;

声明赋值: 会被留在原地等待执行阶段                   // var a = 1;

函数声明会被提升，但函数表达式声明不回被提升           // function test () {} vs var test = function () {}
( 变量和函数同时被提升时，函数优先 )


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### closure

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 闭包               // 根据词法作用域书写代码所产生的自然结果
 * 
 * 
 * 
 * 将内部函数传递到所在词法作用域之外，该函数依然持有对原定义作用域的引用，无论在何处执行该函数都会形成闭包
 * 过多的使用闭包会导致内存泄漏
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


js 引擎有垃圾回收器: 释放不再使用的内存空间

内部函数 bar(); 作为返回值 在外部调用，并且依然使用 foo(); 作用域中的变量，阻止了 js 引擎回收该作用域中的内存使用

使得 foo(); 函数中的内部作用域一直存在


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


fucntion foo(){

    var local = 'hello world';

    function bar() {
    
        console.log(local);
    }
    
    return bar();
}

var baz = foo();


//-------------------------------------------------------------------------------------------------------------------//


// let: 劫持块级作用域

for (let i = 0; i < arr.length; i++) {          // 使用 let 后，每次迭代都会声明一次 i

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### module

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// es5


var es5Module =  (function() {

    function get() {
    }
    
    function set() {
    
    }
    
    return {
        get,
        set,
    };

})();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// es6

export, import


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### dynamic scope

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 动态作用域
 * 
 * 
 * 词法作用域关注于何处声明，动态作用域关注于函数从何处调用
 */


动态作用域并不关心函数和作用域是如何声明以及在何处声明的

仅关心它们从何处调用( 作用域链是基于调用栈的，而不是代码中的作用域嵌套 )


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// es6: let 声明会创建一个显示的作用域并与其进行绑定


let a = 123;


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// es5: 使用块级作用域


try{

    throw 123;

} catch(err) {

    console.log(err);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```


