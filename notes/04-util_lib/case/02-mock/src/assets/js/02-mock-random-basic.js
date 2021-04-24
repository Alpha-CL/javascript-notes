import Mock from "mockjs";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Mock.Random();
 *
 *
 */

let Random = Mock.Random;

console.log("Mock.Random:", Random);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Random.Basic
 *
 *
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.boolean(min?, max?, type?);
 *
 *
 * 随机返回一个布尔值
 */

console.log("Random.boolean(): ", Random.boolean());

console.log("Random.boolean(1, 9, true): ", Random.boolean(1, 9, true));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.natural();
 *
 * Random.natural(min);
 *
 * Random.natural(min?, max?);
 *
 *
 *
 * min-def: 0; max-def: 9007199254740992;
 *
 *
 * 随机返回一个自然数
 */

console.log("Random.natural(): ", Random.natural());

console.log("Random.natural(10000): ", Random.natural(10000));

console.log("Random.natural(60, 100): ", Random.natural(60, 100));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.integer();
 *
 * Random.integer(min);
 *
 * Random.integer(min?, max?);
 *
 *
 * min-def: -9007199254740992; max-def: 9007199254740992;
 *
 *
 * 随机返回正数
 */


console.log("Random.integer(): ", Random.integer());

console.log("Random.integer(10000): ", Random.integer(10000));

console.log("Random.integer(60, 100): ", Random.integer(60, 100));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.float();
 *
 * Random.float(min);
 *
 * Random.float(min,max);
 *
 * Random.float(min,max,dmin);
 *
 * Random.float(min?,max?,dmin?,dmax?);
 *
 *
 * min-def: -9007199254740992; max-def: 9007199254740992;
 *
 * dmin-def: 0; dmax-def: 17;
 *
 *
 * 随机返回浮点数
 */

console.log("Random.float(): ", Random.float());

console.log("Random.float(0): ", Random.float(0));

console.log("Random.float(60, 100): ", Random.float(60, 100));

console.log("Random.float(60, 100, 3): ", Random.float(60, 100, 3));

console.log("Random.float(60, 100, 3, 5): ", Random.float(60, 100, 3, 5));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.character(pool?);
 *
 *
 * @pool: lower: "abcdefghijklmnopqrstuvwxyz"       // [a-z]
 *
 *        upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"       // [A-Z]
 *
 *        number: "0123456789"                      // [0-9]
 *
 *        symbol: "!@#$%^&*()[]"
 *
 *
 *        customize: any
 *
 *
 * 可以使用指定集合，或自定义
 *
 * 返回一个随机字符
 */


console.log("Random.character(): ", Random.character("alpha"));         // 指定字符池

console.log("Random.character(): ", Random.character());                // 随机字符池

console.log("Random.character('lower'): ", Random.character('lower'));

console.log("Random.character('upper'): ", Random.character('upper'));

console.log("Random.character('number'): ", Random.character('number'));

console.log("Random.character('symbol'): ", Random.character('symbol'));

console.log("Random.character('alpha'): ", Random.character('alpha'));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.string();
 *
 * Random.string(length);
 *
 * Random.string(pool, length);
 *
 * Random.string(min, max);
 *
 * Random.string(pool?, min?, max?);
 *
 *
 * @pool: 'lower', 'upper', 'number', 'symbol'
 *
 *
 * 返回一个随机的字符串
 */

console.log("Random.string(): ", Random.string());

console.log("Random.string(5): ", Random.string(5));

console.log("Random.string('lower', 5): ", Random.string('lower', 5));

console.log("Random.string(7, 10): ", Random.string(7, 10));

console.log("Random.string('壹贰叁肆伍陆柒捌玖拾', 3, 5): ", Random.string('壹贰叁肆伍陆柒捌玖拾', 3, 5));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.range(stop)
 *
 * Random.range(star,stop)
 *
 * Random.range(star?,stop?,step?)
 *
 *
 * 返回一个整型数组
 */

console.log("Random.range(10): ", Random.range(10));

console.log("Random.range(3, 7): ", Random.range(3, 7));

console.log("Random.range(1, 10, 2): ", Random.range(1, 10, 2));

console.log("Random.range(1, 10, 3): ", Random.range(1, 10, 3));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////









