///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const moment = require('moment');


//-------------------------------------------------------------------------------------------------------------------//


/**
 * [method]([param]: object);
 *
 *
 * @param: {
 *
 * 		[ key ]: [val],
 *
 *      [ year | y ]: str,
 *      [ month | M ]: str,
 *      [ date | d ]: str,
 *      [ hours | h ]: str,
 *      [ minutes | m ]: str,
 *      [ seconds | s ]: str,
 *      [ millisecond | ms ]: str
 * }
 *
 *
 ** 以 object 作为参数适用 momentjs 的多数 api
 */


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


const alpha = moment({
	y: '1992',
	M: '11',
	d: '11',
	h: '09',
	m: '10',
	s: '50',
	ms: '30'
}), beta = moment({
	y: '2000',
	M: '06',
	d: '20',
	h: '20',
	m: '30',
	s: '40',
	ms: '00'
}), omega = moment({
	y: '1980',
	M: '01',
	d: '22',
	h: '19',
	m: '20',
	s: '30',
	ms: '10'
});


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 设置全局语言环境

// moment.locale(language: string);

moment.locale('zh-cn');				// 默认语言环境


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// moment(object);

console.log(alpha);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// moment().get(key: string);
// moment().set(key: string, val: int);

console.log(alpha.get('y'));

alpha.set('y', 2000);
console.log(alpha.get('y'));


// moment.min(moments: moment[]);
// moment.max(moments: moment[]);

console.log(moment.min(alpha, beta, omega).format());
console.log(moment.max(alpha, beta, omega).format());


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// moment.add(object<number>);
// moment.subtract(object<number>);


alpha.add({y: 3});
console.log(alpha.get('y'));


alpha.subtract({y: 11});
console.log(alpha.get('y'));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 根据不同的格式返回相应的 日期字符串

// moment().format(token: string);


console.log(alpha.format('LT'));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// moment.is[method](): boolean;
// originMom.is[method](targetMom): boolean;


console.log(alpha.isLeapYear());
console.log(alpha.isBefore(beta));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 设置各属性的自定义返回值及格式

// moment.update[Prop](language: string, config: object);

moment.updateLocale('zh-cn', {

	//设置月份名称
	months: '一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),

	//设置月分名称的缩写
	monthsShort: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),

	//设置星期名称
	weekdays: '星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),

	//设置星期名称的缩写
	weekdaysShort: '周日_周一_周二_周三_周四_周五_周六'.split('_'),

	//设置星期名称的最小缩写
	weekdaysMin: '日_一_二_三_四_五_六'.split('_'),

	//设置长日期格式，是个对象
	longDateFormat: {
		LT: 'Ah点mm分',
		LTS: 'Ah点m分s秒',
		L: 'YYYY-MM-DD',
		LL: 'YYYY年MMMD日',
		LLL: 'YYYY年MMMD日Ah点mm分',
		LLLL: 'YYYY年MMMD日ddddAh点mm分',
		l: 'YYYY-MM-DD',
		ll: 'YYYY年MMMD日',
		lll: 'YYYY年MMMD日Ah点mm分',
		llll: 'YYYY年MMMD日ddddAh点mm分'
	},

	//设置相对时间，from()与to()的方法返回的值就是从这里取的
	relativeTime: {
		future: '%s内',
		past: '%s前~~~',
		s: '几秒',
		m: '1 分钟',
		mm: '%d 分钟',
		h: '1 小时',
		hh: '%d 小时',
		d: '1 天',
		dd: '%d 天',
		M: '1 个月',
		MM: '%d 个月',
		y: '1 年',
		yy: '%d 年'
	},

	//设置时间段，参数：小时,分钟,大小写
	meridiem: function (hour, minute, isLower) {
		const hm = hour * 100 + minute;
		if (hm < 600) {
			return '凌晨';
		} else if (hm < 900) {
			return '早上';
		} else if (hm < 1130) {
			return '上午';
		} else if (hm < 1230) {
			return '中午';
		} else if (hm < 1800) {
			return '下午@@@@';
		} else {
			return '晚上';
		}
	},

	//设置日历
	calendar: {
		sameDay: function () {
			return this.minutes() === 0 ? '[今天]Ah[点整]' : '[今天]LT';
		},
		nextDay: function () {
			return this.minutes() === 0 ? '[明天]Ah[点整]' : '[明天]LT';
		},
		lastDay: function () {
			return this.minutes() === 0 ? '[昨天]Ah[点整]' : '[昨天]LT';
		},
		nextWeek: function () {
			let startOfWeek, prefix;
			startOfWeek = moment().startOf('week');
			prefix = this.diff(startOfWeek, 'days') >= 7 ? '[下]' : '[本####]';
			return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
		},
		lastWeek: function () {
			let startOfWeek, prefix;
			startOfWeek = moment().startOf('week');
			prefix = this.unix() < startOfWeek.unix() ? '[上]' : '[本]';
			return this.minutes() === 0 ? prefix + 'dddAh点整' : prefix + 'dddAh点mm';
		},
		sameElse: 'LL'
	},
	week: {
		dow: 1,	//星期的第一天是周1
		doy: 4
	}
});

console.log(`now date: ${moment().format('dddd, MMMM Do YYYY, h:mm:ss a')}`);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 根据指定对象创建一段时间长度的 momentObj

// moment.duration(object);

const duration = moment.duration({
	y: '1992',
	M: '11',
	d: '11',
	h: '09',
	m: '10',
	s: '50',
	ms: '30'
});

console.log(duration.get('y'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////