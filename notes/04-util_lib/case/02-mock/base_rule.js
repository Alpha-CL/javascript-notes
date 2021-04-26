///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const Mock = require('mockjs');


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Mock.mock({
 *
 *     	['key|rule']: [type],
 *
 *
 * 	   	1) ['key|min-max']: [type]
 *
 * 			// 生成一个随机将 type 重复 min-max 的字符串
 **	   		['key|min:number-max:number']: [type:string]							// string
 *
 * 			// 随机生成一个数字，取值范围在 min-max 之间
 **	   		['key|min:number-max:number']: [type:number]							// number
 *
 * 			// 随机生成一个布尔值，概率运算公式: min/(min+max) | max/(min+max)
 **	   		['key|min:number-max:number']: [type:boolean]							// boolean
 *
 * 			// 随机从 object 中取出 min-max 个子项
 **	   		['key|min:number-max:number']: [type:object]							// object
 *
 * 			// 随机重复 min-max 次数组的子项
 **	   		['key|min:number-max:number']: [type:array]								// array
 *
 *
 * 	   	2) ['key|count']: [type]
 *
 * 			// 将字符串重复固定的 count 次
 **	   		['key|count:number']: [type:string]										// string
 *
 * 			// count 表示生成 true & false 的概率( count = 1 时，true & false 生成概率各百分之五十)
 **	   		['key|count:number']: [type:boolean]									// boolean
 *
 * 			// 固定从 object 中取出 count 个子项
 **	   		['key|min:number-max:number']: [type:object]							// object
 *
 * 			// 固定重重复 count 次数组的子项
 **	   		['key|min:number-max:number']: [type:array]								// array
 *
 *
 * 	   	3) ['key|min-max.dmin-dmax']: [type]
 *
 * 			// ( 整数位在 min-max 之间，小数位在 dmin-dmax 之间 ) 随机取值
 **	   		['key|min:number-max:number.dmin:number-dmax:number']: [type:number]	// number
 *
 *
 * 	   	4) ['key|min-max.dcount']: [type]
 *
 * 			// 整数位在 min-max 之间随机取值，dcount 表示生成小数的固定位数
 **	   		['key|min-max.dcount']: [type:number]									// number
 *
 *
 * 	   	5) ['key|count.dmin-dmax']: [type]
 *
 * 			// count 表示生成整数的固定位数，小数位在 dmin-dmax 之间随机取值
 **	   		['key|count.dmin-dmax']: [type:number]									// number
 *
 *
 * 	   	6) ['key|count.dcount']: [type]
 *
 * 			// count 表示整数位的取值，dcount 表示生成小数的固定位数
 ** 		['key|count.dcount']: [type:number]										// number
 *
 *
 * 	   	7) ['key|+step']: [type]
 *
 * 			// 直接返回函数的执行结果
 ** 		['key']: [type:function]												// function
 *
 * 			// 生成符合正则表达式的结果
 ** 		['key']: [type:regex]													// regex
 *
 * });
 *
 *
 ** 属性名中严禁使用空格，否则无法解析
 *
 */


//- - - - - - - - - - - - - 1- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


console.log(Mock.mock({

	'key_00|4': 'string',
	'key_01|1-4': 'string',
	'key_02|0-100': 10,

	'key_03|1-10.5': 10,
	'key_04|1-10.2-4': 10,

	'key_05|20.2': 10,
	'key_06|20.3': 10,

	'key_07|1': false,
	'key_08|1-5': false,

	'key_09|2': {a: 1, b: 2, c: 3, d: 4},
	'key_10|1-2': {a: 1, b: 2, c: 3, d: 4},


	'key_11|2': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
	'key_12|1-3': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],


	'key_13': () => 1 + 2,


	'key_14': /[a-x][A-Z][0-9]/,
	'key_15': /\w\W\s\S\d\D/,
	'key_16': /\d{5,10}/,
}));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
