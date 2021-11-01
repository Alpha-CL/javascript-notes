///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 避免使用 new 创建，建议使用字面量创建
 *
 *
 *
 *  new 创建: 必须创建，后在依次设置属性
 *
 * 字面量创建: 创建时，及可以一次设置多个属性
 *
 ** 可以不使用 new 来构造内置函数的实例，js 会自动补全                  // 不建议这样使用
 ** 通过 构造函数 / 字面量 创建的原理: 都是通过封装对象来包装
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


let a = new Array(3),                    // 创建长度为 3 的空单元数组
    b = [undefined, undefined, undefined],          // 创建长度为 3 每个单元为 undefined 的数组
    c = [];                                         // 创建长度为 1 的空数组


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


a.join('-');
b.join('-');

console.log('a: ', a);             // [ <3 empty items> ]
console.log('b: ', b);             // [ undefined, undefined, undefined ]


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const res1 = a.map((v, i) => (i));
const res2 = b.map((v, i) => (i));

console.log('a.map: ', res1);       // 数组中并不存在任何单元
console.log('b.map: ', res2);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function myJoin(arr, connector) {

    let str = '';

    for (let i = 0; i < arr.length; i++) {

        if (i > 0) {                                // 判断是否不是空数组

            str += connector;
        }

        if (arr[i] !== undefined) {                 // 判断是否有该子项

            str += arr[i];
        }
    }

    return str;
}


let testArrJoin = new Array(3);

myJoin(testArrJoin, '-');

console.log('testArrJoin: ', testArrJoin);


//-------------------------------------------------------------------------------------------------------------------//


/**
 * target.apply(this, args: array);
 *
 *
 ** 该方法会隐式调用 Array();           // 避免使用 new Array(length); 创建无单元但有长度的数组
 */


let testArr1 = Array.apply({length: 3});

console.log('testArr1: ', testArr1);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

