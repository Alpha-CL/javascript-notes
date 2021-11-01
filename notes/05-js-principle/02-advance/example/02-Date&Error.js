///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Date & Error 并没有字面量形式
 *
 *
 *
 */


//-------------------------------------------------------------------------------------------------------------------//


const es5dt = Date.now(),
    es4dt = new Date();

console.log(es5dt);
console.log(es4dt.getTime());

console.log(es5dt === es4dt.getTime());


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 主要为了获取当前执行栈的上下文
 *
 *
 ** 栈上下文信息包括函数调用栈信息和产生错误代码行号( 便于调试 )
 */


let err = new Error();

// 通常错误对象至少包含一个 message 属性
// 其他属性一般作为只读属性
// 访问 stack 属性之外，通常使用( 显式调用 / 强制类型转 隐式调用 ) toString();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * EvalError(), RangeError(), ReferenceError(), SyntaxError(), TypeError(), URIError() ...
 *
 *
 * 部分错误的内置函数会被自动调用
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////