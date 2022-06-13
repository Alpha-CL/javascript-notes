# Similar Array

#### introduction

``` javascript
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 类数组

1. 可以利用属性名模拟数组的特性

2. 可以动态的正常 length 属性 

3. 如果强行让类数组调用 push 方法，则会根据 length 属性值的位置进行属性的扩充


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function test() {

    // arguments.push(1);              // arguments.push is not a function

    console.log(arguments);            // Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
}

test(1, 2, 3, 4);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


// 模拟 类数组


/**
 * 1. 属性要为索引( 数字 )属性 => obj { key(start: 0 | number) : value }
 *
 * 2. 必须有 length 属性
 *
 * 3. 最好加上 push 属性 { number : Array.prototype.push }
 */

var obj = {

    '0' : 'a',                                  // index: number;
    '1' : 'b',
    '2' : 'c',

    'length' : '3',                             // must

    'push' : Array.prototype.push,              // need

    'splice' : Array.prototype.splice           // must obj{} => obbj[]
};


console.log(obj);                               // {0: "a", 1: "b", 2: "c", length: "3", push: ƒ}

rel = obj.push('d');

console.log(obj);                               // {0: "a", 1: "b", 2: "c", 3: "d", length: 4, push: ƒ}


// 模拟 push(); 原理

Array.prototype.push = function (target) {

    obj[obj.length] = target;                   // 改变 length

    obj.length ++;
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


// 类数组应用

/**
 * 拥有部分 数组的属性: index: number -- must, lenght -- must
 * 
 * 
 * 也可以像 对象 的属性和方法: push(); -- need, splice(); -- must => obj{} -> obj[] 
 */

var obj = {

    '0' : 'a',                                  // index: number;
    '1' : 'b',
    '2' : 'c',
    name : 'alpha',
    age : 18,
    lenght : 3,                                 // must
    push : Array.prototype.push,                // need
    splice : Array.prototype.splice             // must   obj{} -> obj[]
}

console.log(obj);               // {0: "a", 1: "b", 2: "c", name: "alpha", age: 18, lenght: 3, push: ƒ, splice: ƒ}


// 遍历所有属性  

for(var prop in obj) {

    console.log(obj[prop]);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

``` javascript
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Examplt

var obj = {

    '2' : 'a',
    '3' : 'b',
    'length' : '2',                             // add lenth property
    'push' : Array.prototype.push               // add push method
};

obj.push('c');
obj.push('d');


console.log(obj);

// =>   Object
//      2 = "c"
//      3 = "d"
//      length = 4
//      push = function push() { [native code] }
//      __proto__ = Object {constructor: , __defineGetter__: , __defineSetter__: , hasOwnProperty: , __lookupGetter__: , ...}


var rel = {

    '2' : 'c',
    '3' : 'd',
    'lenght' : '4',
    'push' : Array.prototype.push
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```