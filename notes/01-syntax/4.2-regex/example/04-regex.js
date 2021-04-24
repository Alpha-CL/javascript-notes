///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



/**
 *
 * 写正则表达式，根据字符串来写正则表达式进行匹配
 *
 * 经验:
 *
 *  1. 找规律
 *  2. 不要追求完美
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 * 身份证的正则表达式
 *
 */


/**
 *
 *
 * 15位 数字
 * [1 - 9][0 - 9]{14}
 *
 * 18位 数字
 * [1 - 9][0 - 9]{16}[0 - 9xX]
 *
 * 15位 或 18位 数字
 * ([1 - 9][0 - 9]{14}) | ([1 - 9][0 - 9]{16}[0 - 9xX])
 *
 *
 * ([1 - 9][0 - 9]{14}([0 - 9]{2}[0 - 9xX]))?
 *
 *
 */


//-------------------------------------------------------------------------------------------------------------------//


/**
 *
 *
 * 座机号正则表达式
 *
 *
 * 010 - 19341583
 * 0314 - 31531532
 *
 *
 * [0 - 9]{3,4}[-][0 - 9]{8}
 *
 * \d{3,4}[1][0 - 9]{8}
 *
 * \d{3,4}[-]\d{8}
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 *
 * QQ 号正则表达式
 *
 *
 * 5 - 11 位数字
 *
 * [1 - 9][0 - 9]{4,10}
 *
 * [1 - 9]\d{4,10}
 *
 * \d{5,11}
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 *
 * 手机号正则表达式
 *
 * 130 131 132 133 134 135 136 137 138 139
 * 143 147
 * 150 151 152 153 154 155 156 157 158 159
 * 170 171 173 176 177
 * 180 181 182 183 184 185 186 187 188 189
 *
 * ([1][358][0 - 9]{8}) | ([1][4][37][0 - 9]{8}) | ([1][7][01367][0 - 9]{8})
 *
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 *
 * 邮箱的正则表达式
 *
 * xiaodao_92@126.com.cn
 *
 * [0 - 9a - zA - Z.-]+[@][0 - 9a - zA - Z.-]+([.][a - zA -Z]+{1,2})
 *
 * xiaodao_92 ==> [0 - 9a - zA - Z.-]+
 *
 * @ ==> [@]
 *
 * 126 ==> [0 - 9a - zA - Z.-]+
 *
 * .com.cn ==> ([.][a - zA -Z]+{1,2})
 *
 *
 */

//-------------------------------------------------------------------------------------------------------------------//


//创建对象完毕( 没有正则表达式的对象 )
//可以放在 引号用 也可以放在 / xxx / 中
var reg1 = new RegExp(/\d{5}/);
var reg2 = new RegExp("\d{5}");

//字符串
var str = 'my phone number: 10086';

//调用方法验证字符串是否匹配
var flag = reg1.test(str);
console.log(flag);


var reg3 = new RegExp(/\d{5}/);
var flag1 = reg3.test('my phone number: 10010');
console.log(flag1);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//字面量方式创建正则表达式对象

var reg4 = /\d{1,5}/;

var flag4 = reg4.test('my luckily number: 888');

console.log(flag4);


//-------------------------------------------------------------------------------------------------------------------//


//识别正则表达式是否匹配


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 * var reg5 = /[a-zA-Z]+/;
 * var flag5 = reg5.test('hello');
 * console.log(flag5);
 *
 */

//简化代码
console.log(/[a-zA-Z]+/.test('hello'));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 任意一个除 '\n' 以外的 字符
 *
 */
console.log("/./: 任意一个除 回车 以外的 字符 ==> " + /./.test("除回车以外的任意字符"));//true

/**
 * 任意一个除 '\n' 以外的字符，出现了 0次 或 n次
 *
 */
console.log("/.*/: 任意一个除 '\\n' 以外的字符，出现了 0次 或 n次 ==> " + /.*/.test("0个到多个"));                   //true

/**
 * 任意一个除了 '\n' 以外的字符，出现了 1次 或 n次
 *
 */
console.log(/.+/.test("1个到多个"));                   //true

/**
 * 任意一个除 '\n' 以外的字符，出现了 0次 或 1次
 *
 */
console.log(/.?/.test("哈哈"));                       //true

/**
 * 0 - 9 之间任意一个数字
 *
 */
console.log(/[0-9]/.test("9527"));                   //true

/**
 * a - z 之间任意一个字母
 *
 */
console.log(/[a-z]/.test("what"));                   //true

/**
 * A - Z 之间任意一个大写字母
 *
 */
console.log(/[A-Z]/.test("Are"));                   //true

/**
 * 所有大小写字母中任意一个字母
 *
 */
console.log(/[a-zA-Z]/.test("干啥子"));              //false

/**
 * 0 到 9 和 所有 大小写字母中任意一个
 *
 */
console.log(/[0-9a-zA-Z]/.test("9ebg"));            //true

/**
 * b 或者 ara 中任意一个
 *
 */
console.log(/b|(ara)/.test("abra"));                //true

/**
 * a - z 字母中出现了 2次 到 3次
 *
 */
console.log(/[a-z]{2,3}/.test("arfsf"));            //true


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 任意一个数字
 *
 */
console.log(/\d/.test("998"));              //true

/**
 * 任意一个数字出现 0次 到 n次
 *
 */
console.log(/\d*/.test("998"));             //true

/**
 * 任意一个数字出现 1次 到 n次
 *
 */
console.log(/\d+/.test("998"));             //true

/**
 * 任意一个数字出现 0次 到 n次 == *
 *
 */
console.log(/\d{0,}/.test("998"));          //true

/**
 * 任意一个数字出现 2次 到 3次
 *
 */
console.log(/\d{2,3}/.test("998"));         //true

/**
 * 任意一个非数字
 *
 */
console.log(/\D/.test("eat"));              //true

/**
 * 空白符
 *
 */
console.log(/\s/.test("before   after"));       //true

/**
 * 非空白符
 *
 */
console.log(/\S/.test("嘎嘎 "));                  //true

/**
 * 非特殊符号
 *
 */
console.log(/\w/.test("_"));                    //true

/**
 * 特殊符号
 *
 */
console.log(/\W/.test("_"));        //false


//-------------------------------------------------------------------------------------------------------------------//


/**
 *
 * 全局提取数字
 *
 * g: 表示全局检索
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var str1 = "中国移动:10086,中国联通:10010,中国电信:10000";

//把数组中的数组显示出来
//正则表达式中 g 表示全局
var arr = str1.match(/\d{5}/g);

console.log(arr);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var reg11 = /\d{5}/g;

//通过正则表达式匹配这个字符串
var arr11 = reg11.exec(str1);


//匹配多余次数多1时，为 null
// console.log(arr11);                     //10086
// console.log(reg11.exec(str1));          //10010
// console.log(reg11.exec(str1));          //10000
// console.log(reg11.exec(str1));          //null
// console.log(reg11.exec(str1));          //10086


while (arr11 != null) {

    //输出匹配内容
    console.log(arr11[0]);
    arr11 = reg11.exec(str1);
}


//-------------------------------------------------------------------------------------------------------------------//


/**
 *
 * 提取邮箱
 *
 */

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var str2 = "xiaodoa_92@yeah.net, 92xiaodao@gmail.com, 498193405@126.com";

var arr2 = str2.match(/\w+@\w+\.\w+(\.\w+)?/g);

console.log(arr2);


//-------------------------------------------------------------------------------------------------------------------//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var str3 = '2017-11-11, 2019-12-12, 2020-13-13';

str3.match(/\d{4}[-]\d{2}[-]\d{2}g/);

// console.log(str3);

//正则表达式对象 .$3
console.log(RegExp.$1);


//-------------------------------------------------------------------------------------------------------------------//


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var email = "xiaodao_92@yeah.net";

email.match(/([0-9a-zA-Z_.-]+)([@])([0-9a-zA-Z_.-]+)([.][a-zA-Z]+){1,2}/);

console.log(RegExp.$1);         //xiaodao_92
console.log(RegExp.$2);         //@
console.log(RegExp.$3);         //yeah
console.log(RegExp.$4);         //.net


//-------------------------------------------------------------------------------------------------------------------//


var str5 = "小苏好帅哦,真的太帅了,帅,就是真帅";

str5 = str5.replace(/丑/g, '帅');         //小苏好丑哦，真的太丑了,丑,就是真丑

console.log(str5);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


var str6 = "see     you   again";

//无法去除空格
// str6 = str6.trim();                  //see     you   again
// console.log(str6);


str6 = str6.replace(/\s+/g, '');        //seeyouagain
console.log(str6);


//-------------------------------------------------------------------------------------------------------------------//

/**
 *
 * g: 全局( global ) == 全局替换或搜索等
 *
 * i: 忽略( ignore ) == 忽略大小写
 *
 */

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


//所有 h 都替换成 S

var str7 = "HhpphH";


str7 = str7.replace(/[h]/gi, 'S');
console.log(str7);


var reg7 = new RegExp(/[h]/gi);
str7 = str7.replace(reg7, 'S');
console.log(str7);


//-------------------------------------------------------------------------------------------------------------------//


/**
 *
 * 数组 和 伪数组
 *
 * 真数组的长度是可变的，伪数组的长度不可变( 是人为添加的属性 )
 *
 * 真数组可以使用数组中的方法，伪数组不能使用数组中的方法
 *
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

//数组
var arr8 = [10, 20, 30];

//对象
var obj8 = {

    0: 10,
    1: 20,
    2: 30,
    length: 3
};


console.log(obj8[0]);
console.log(obj8[1]);
console.log(obj8[2]);
console.log(obj8.length);
console.log(obj8[3]);
console.log(obj8.length);


//遍历数组
for (var i = 0; i < arr8.length; i++) {

    console.log(arr8[i]);
}


for (var i = 0; i < obj8.length; i++) {

    console.log(obj8[i]);
}


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function f1() {

    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {

        sum += arguments[i];
    }
    console.log(sum);
}

f1(10, 20, 30);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 *
 * 真数组可以调用方法
 *
 * 伪数组不能调用方法
 *
 */


//数组实例对象的 __proto__ => Array -> prototype
var arr9 = [40, 50, 60];

arr.forEach(function () {


});


// function f2() {
//
//     var sum = 0;
//
//     arguments.forEach(function () {
//
//     })
// }


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 书写一个正则表达式，匹配一个字符串，获取匹配的次数和匹配的结果
 *
 *
 */


var reg = /\d{3}/g;

var s = '4333nin3nkl1n333n53123nni32132nni3ln431';

var n = 0;

while (result = reg.exec(s)) {

    n++;
    console.log(result[0]);
}

console.log(`匹配${n}次`)


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 获取一个字符串中中文字符的数量
 *
 *
 */


var reg = /[\u4e00-\u9fa5]/g;

var s = 'fggg啊是你的adawdw啊额尔法wmadwoa啊aaa啊';

var n = 0;


while (result = reg.exec(s)) {

    n++;
}

console.log(n);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 替换数组中的敏感词汇为指定字符
 *
 *
 */

var senWords = ['色情','暴力','贸易战'];               // 敏感词汇

function removeSensitiveWords(str, rep) {

    var reg = new RegExp(`(${senWords.join('|')})`, 'g');

    return s.replace(reg, rep);
}

console.log(removeSensitiveWords('ssffwafw色情暴力wadadw色情midwanidlwan贸易战'));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * 判断有字符串中有多少个章节
 *
 *
 */


var target = '';

var reg = /<h2>第\d+个<\/h2>/g;

var result = target.match(reg);


if (result) {

    console.log(result.length);

} else {

    console.log(0);
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


























