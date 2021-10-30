## scope & closure

### simple compilation principle

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 编译原理
 * 
 * 
 * javascript 动态/解释性 语言         // 预编译 -> 编译
 */


//-------------------------------------------------------------------------------------------------------------------//


1) 分词/词法分析                      // tokenizing/lexing


将由字符组成的字符串分解成 有意义的代码块

eg: var a = 2; =>  ( var， a， =， 2 )


词法分析过程: 判断词法为 "独立单元" 或 "其他词法单元的一部分" 时，调用 "有/无状态解析规则"


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


2) 解析/语法分析                      // parsing


// abstract syntax tree

抽象语法树: 将词法单元流( 数组 ) 转换为一个由元素 逐渐组成 代表程序语法结构的树

eg: var a = 2;


variable declaration {                  // 变量声明

    identifier {                        // 标识符
    
        ...
    }
    
    assignment expression {             // 赋值表达式
    
        number cliteral: 2              // 值
    }
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


3) 代码生成


代码生成: 将 AST 转换为 可执行代码的过程( 该过程与 语言， 目标平台 均有关系 )

eg: var a = 2;                          // 创建一个变量( 内存分配等 )， 并将 2 赋值给它


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


引擎 + 编译器 + 作用域

eg: var a = 2;


变量赋值: 

    1. 在当前作用域中是否已声明了该变量
    
        - 已声明: 忽略该声明，继续编译
        
        - 未声明: 则在当前作用域中声明一个新的变量
    
    2. 当前作用域中是否有已经声明的该该变量 
    
        - 有: 使用该变量，直接赋值
        
        - 无: 继续向外部作用域寻找，直到找到 全局作用域，若还未找到则 抛出错误


//-------------------------------------------------------------------------------------------------------------------//


LHS & RHS


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 寻找 "赋值源" 和 "值"

    LHS: 赋值的容器查询             // 等号左侧

    RHS: 值查询                    // 等号右侧


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function foo(a) {           // 参数赋值 a = 2; 时，调用了 LHS 引用

    cosole.log(a);
}

foo(2);                     // 寻找 foo(2); 的值，进行了 RHS 引用，并隐式分配 a = 2;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```