import Mock from "mockjs";

let Random = Mock.Random;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Mock.mock({'name|rule':value});
 *
 *
 * 生成的规则必须依赖 Mock.mock();
 *
 *
 * 1) 'name|min-max': value
 *
 * 2) 'name|count': value
 *
 * 3) 'name|min-max.dmin-dmax': value
 *
 * 4) 'name|min-max.dcount': value
 *
 * 5) 'name|count.dmin-dmax': value
 *
 * 6) 'name|count.dcount': value
 *
 * 7) 'name|+step': value
 */


//-------------------------------------------------------------------------------------------------------------------//


/** String parameter **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * key: val-str;
 *
 *
 * 'name|min-max': str              // 随机生成 min~max 数量的 str
 *
 * 'name|count': str                // 固定生成 count 数量的 str
 */


console.log(Mock.mock({"key: val-str; 1-4|1-4": "alpha"}));

console.log(Mock.mock({"key: val-str; 2|2": "alpha"}));


//-------------------------------------------------------------------------------------------------------------------//


/** Number parameter **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * key: val-num;
 *
 *
 * 'name|+step': num                // 每次生成的值为 当前数字 + 1
 *
 * 'name|min-max': num              // 随机生成 min～max 内的数字
 *
 * 'name|min-max.dcount': num       // 随机生成 min～max 内的数字，并且固定生成 dcount 位的小数
 *
 * 'name|min-max.dmin-dmax': num    // 随机生成 min～max 内的数字，并且随机生成 dmin～dmax 位的小数
 *
 * 'name|count.dmin-dmax': num      // 固定生成 count 位的数字，并且随机生成 dmin～dmax 位的小数
 *
 * 'name|count.dcount': num         // 固定生成 count 位的数字，并且固定生成 dcount 位的小数
 */


console.log(Mock.mock({"key: val-num; +1|+1": 100}));

console.log(Mock.mock({"key: val-num; 1-100|1-100": 1}));

console.log(Mock.mock({"key: val-num; 1-100.5|1-100.5": 1}));

console.log(Mock.mock({"key: val-num; 1-100.1-10|1-100.1-10": 1}));

console.log(Mock.mock({"key: val-num; 100.1-10|100.1-10": 1}));

console.log(Mock.mock({"key: val-num; 100.10|100.10": 1}));


//-------------------------------------------------------------------------------------------------------------------//


/** Boolean parameter **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * key: val-bool;
 *
 *
 * boolean 返回概率计算公式: true: min / (min + max); false: max / (min + max);
 *
 *
 * 'name|count': bool               // 固定值 === 1-1，会返回布尔值的概率各 50%
 *
 * 'name|min-max': bool             // 随机生成 布尔值(true/false)返回
 */


console.log(Mock.mock({"key: val-bool; 1 === 1-1|1": true}));

console.log(Mock.mock({"key: val-bool; 1-5|1-5": false}));


//-------------------------------------------------------------------------------------------------------------------//


/** Object parameter **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * key: val-obj;
 *
 *
 * 'name|count': obj                // 返回固定 count 个子项的对象
 *
 * 'name|min-max': obj              // 随机返回 min~max 个子项的对象
 */


console.log(Mock.mock({"key: val-obj; 1-3|1-3": {a: 10, b: 20, c: 30, d: 40}}));

console.log(Mock.mock({"key: val-obj; 2|2": {a: 10, b: 20, c: 30, d: 40}}));


//-------------------------------------------------------------------------------------------------------------------//


/** Array parameter **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * key: val-arr;
 *
 *
 * 'name|count': arr                // count = 1: 随机选取数组中1个数据
 *                                  // count > 1: 返回固定 count 个子项的对象
 *
 *
 * 'name|min-max': obj              // 随机生成 min~max 倍数子项的对象
 */


console.log(Mock.mock({"key: val-arr; 2|2": ["a", "b", "c", "d", "e"]}));

console.log(Mock.mock({"key: val-arr; 1-3|1-3": ["a", "b", "c", "d", "e"]}));


//-------------------------------------------------------------------------------------------------------------------//


/** Function parameter **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * key: val-func;
 *
 *
 * 'name': function                 // 将该函数的返回结果作为返回对象 key 所对应的 value
 *                                  // return result => {key: result}
 */

console.log(Mock.mock({

    "key: val-func; 1|1": function () {

        return 1 + 2;
    }
}));


//-------------------------------------------------------------------------------------------------------------------//


/** Regexp parameter **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * key: val-reg;
 *
 *
 * 'name': reg                      // 根据正则表达式生成返回值
 *                                  // /\s/ 若匹配到 空字符，则返回的字符会多一位
 */

console.log(Mock.mock({"key: val-reg-1;": /[a-z][A-Z][0-9]/}));

console.log(Mock.mock({"key: val-reg-2;": /\w\W\s\S\d\D/}));

console.log(Mock.mock({"key: val-reg-3;": /\d{5,10}/}));


//-------------------------------------------------------------------------------------------------------------------//


/** data placeholder **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 数据占位符定义规范 DPD                // 使用大写字母仅因为更好识别
 *
 *
 * 占位符 只是在属性值字符串中占个位置，并不出现在最终的属性值中
 *
 *
 * 1. 用 @ 来标识其后的字符串是 占位符
 * 2. 占位符 引用的是 Mock.Random 中的方法
 * 3. 通过 Mock.Random.extend() 来扩展自定义占位符
 * 4. 占位符 也可以引用 数据模板 中的属性
 * 5. 占位符 会优先引用 数据模板 中的属性,
 * 6. 占位符 支持 相对路径 和 绝对路径
 */

console.log("Mock.mock('@EMAIL'): ", Mock.mock('@EMAIL'));

console.log("Mock.mock('@CITY'): ", Mock.mock('@CITY'));

console.log("Mock.mock('@cword(\"alpha\", 1, 3))'): ", Mock.mock('@cword("alpha", 1, 3)'));


//-------------------------------------------------------------------------------------------------------------------//


/** extend **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Random.extend();
 *
 *
 * 扩展方法( 可利用已有方法和占位符 )
 */

Random.extend({

    constellation: function (date) {

        let constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女组', '天平座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座'];

        return this.pick(constellations);
    }
});

console.log("Random.constellation(): ", Random.constellation());


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** Mock.mock(); **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Mock.mock(rurl?, rtype?, template | function(options));
 *
 *
 * @rurl: 表示需要拦截的 URL，可以是 URL 字符串或 URL 正则
 * @rtype: 表示需要拦截的 Ajax 请求类型
 * @template: 表示数据模板，可以是对象或字符串
 * @function(): 表示用于生成响应数据的函数
 * @options: 指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Mock.mock(template);
 *
 *
 * 根据数据模板生成模拟数据
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Mock.mock(rurl, template);
 * Mock.mock(rurl, function(options));
 * Mock.mock(rurl, rtype, template);
 * Mock.mock(rurl, rtype, function(options));
 */


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/** Mock.setup(settings); **/


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Mock.setup(timeout);
 *
 *
 * @timeout: 指定被拦截的 Ajax 请求的响应时间，单位是毫秒
 *
 * 配置拦截 Ajax 请求时的行为。支持的配置项有：timeout
 */


Mock.setup({timeout: 400});

Mock.setup({timeout: '200-600'});



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


