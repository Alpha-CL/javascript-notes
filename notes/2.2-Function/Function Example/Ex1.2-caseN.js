////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//--------------------------------------------------------------------------------------------------------------------//


//example 1


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


function test1(a, b) {

    document.write(a);          // 1

    c = 0;

    var c;

    a = 3;

    b = 2;

    document.write(b);          // 2

    function b() {
    }

    function d() {
    }

    document.write(b);          // 2
}

test1(1);


//--------------------------------------------------------------------------------------------------------------------//


//example-2


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


function test2(a, b) {

    console.log(a);             // function a() {}

    console.log(b);             // undefined

    var b = 234;

    console.log(b);             // 234

    a = 123;

    console.log(a);             // 123

    function a() {
    }

    var a;

    b = 234;

    var b = function () {
    };

    console.log(a);             // 123

    console.log(b);             // function () {}
}


test2(1);


//--------------------------------------------------------------------------------------------------------------------//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


console.log(test3);                     // function () { ... }

function test3(test3) {

    console.log(test3);                 // function () {}

    var test3 = 234;

    console.log(test3);                 // 234

    function test3() {
    }
}

test3(1);

var test3 = 123;


/**
 *  AO 和 GO 中同时都有相同的声明
 *
 *  AO 会先调用自己的，自己中没有在去 GO 中寻找
 */


// GO {
//
//     test3 : function () { ... }
// }


// AO {
//
//     test3 : function () {}
// }


//--------------------------------------------------------------------------------------------------------------------//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


// GO {
//
//     global : 100;
//     f1 : function () {}
// }

var global1 = 100;

function f1() {

    // var global1 = 200;           // 如果已有则不需要在去 GO 中寻找

    console.log(global1);           // 100
}

// AO {
//                                  // 如果 AO 中有 global1，则先用自己的
//                                  // 此时 AO 中没有要调用的 global 则向 GO 中去找
// }

f1();


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - //


// GO {
//
//     global2 : undefined,
//     f2 : function () {}
// }

global2 = 100;                      // global2 : undefined; => global2 : 100; ( 这是 GO 中的 )

function f2() {

    console.log(global2);           // undefined

    global2 = 200;

    console.log(global2);           // 200

    var global2 = 300;
}

// AO {
//
//     global2 : undefined,
// }

f2();

var global2;


//--------------------------------------------------------------------------------------------------------------------//


// GO {
//
//     a : undefined,
//     test4 : function () {}
//
//     c : undefined;           // 执行到函数作用域内才添加的
// }

function test4() {

    console.log(b);             // undefined

    if (a) {

        var b = 100;
    }

    c = 234;

    console.log(c);             // 234
}

var a;

// AO {
//
//     b : undefined,
// }

test4();

a = 10;

console.log(c);                 // 234


//--------------------------------------------------------------------------------------------------------------------//


function bar1() {

    return foo1;

    foo1 = 10;

    function foo1() {
    }

    var foo1 = 11;
}

// AO {
//
//     foo1 : function () {}
// }

console.log(bar1());


//--------------------------------------------------------------------------------------------------------------------//


// AO {
//
//     foo2 : function () {} -> foo2 = 11; => foo2 : 11
// }

console.log(bar2());

function bar2() {

    foo2 = 10;

    function foo2() {
    }

    var foo2 = 11;

    return foo2;
}

//--------------------------------------------------------------------------------------------------------------------//


// GO {
//
//     a : undefined, -> a : 100
//
//     demo : function () {},
//
//     f : 123
// }

a = 100;

function demo(e) {

    function e() {
    }

    arguments[0] = 2;

    console.log(e);                  // 2

    if (a) {

        var b = 123;

        function c() {              // 现在 google 已经不允许 if 中 有 function

            // 猪猪都能做出来
        }
    }

    var c;

    a = 10;

    var a;

    console.log(b);                  // undefined

    f = 123;

    console.log(c);                  // undefined
    console.log(a);                  // 10
}

var a;

// AO {
//
//    a : undefined, -> a : 10
//    b : undefined,
//    c : undefined, -> c : function () {}
//    e : function () {} -> e : 1 -> e : function () {} -> e : 2
//
// }

demo(1);

console.log(a);                      // 100

console.log(f);                      // 123


//--------------------------------------------------------------------------------------------------------------------//


var str = false + 1;

console.log(str);                   // 1

var demo = false == 1;              // false

console.log(demo);

if (typeof (a) && -true + (+undefined) + "") {

    /**
     * typeof(a); => undefined
     * typeof(null); => object
     *
     * -true => -1
     * (+undefined) => NaN
     */

    console.log('基础扎实');
}

if (11 + '11' * 2 == 33) {

    console.log('基础扎实');
}

!!" " + !!"" - !!false || console.log('你觉得能打印，你就是猪');

/**
 * !!" " => true
 * !!"" => false
 * !!false => false
 */


//--------------------------------------------------------------------------------------------------------------------//


function Person(name, age, sex) {

    var a = 0;

    this.name = name;
    this.age = age;
    this.sex = sex;

    function sss() {

        a ++;
        console.log(a);
    }
    this.say = sss;
}

var oPerson = new Person();

oPerson.say();                          // 1
oPerson.say();                          // 2

var oPerson1 = new Person();

oPerson1.say();                         // 1


//--------------------------------------------------------------------------------------------------------------------//


(function (x) {


    delete x;
    return x;                           // 1

}(1));


//--------------------------------------------------------------------------------------------------------------------//


function test() {


    console.log(typeof arguments);      // object
}


//--------------------------------------------------------------------------------------------------------------------//



// var h = function a() {
//
//    return 23;
// }
//
//
// console.log(typeof a());                // syntaxError: a si not defined


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
