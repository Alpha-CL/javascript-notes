# momentjs

## basic knowledge 

#### utc

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * coordinated universal time
 * 
 * 
 * 协调世界时
 */

协调世界时，又称世界统一时间、世界标准时间、国际协调时间
由于英文( CUT )和法文( TUC )的缩写不同，作为妥协，简称 UTC

协调世界时是以原子时秒长为基础，在时刻上尽量接近于世界时的一种时间计量系统


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


中国大陆、中国香港、中国澳门、中国台湾、蒙古国、新加坡、马来西亚、菲律宾、西澳大利亚州的时间与UTC的时差均为+8，也就是UTC+8

UTC时间：这套时间系统被应用于许多互联网和万维网的标准中，例如，网络时间协议就是协调世界时在互联网中使用的一种方式


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### time zone

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * time zone
 * 
 * 
 * 为了照顾到各地区的使用方便，又使其他地方的人容易将本地的时间换算到别的地方时间上去
 * 有关国际会议决定将地球表面按经线从东到西( 每隔经度 15 °划分一个时区 )
 */

整个地球分为二十四时区，每个时区都有自己的本地时间

正式的时区划分包括 24 个时区，每一时区由一个英文字母表示
东西划分( 每隔经度 15° 划分一个时区 )
有一个例外，每个时区有一条中央子午线


{西11 ~ 西1} <- UTC -> {东1 ～ 东11} + 东西12


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### utc + utc_offset = local

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * [utc] + [utc_offset] = [local]
 * 
 * 
 * 
 */

协调世界时 + 各时区偏移量( 小时 ) = 本地时间


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### ISO 8601 & RFC 2822

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// ISO 8601 & RFC 2822 都是用于约束 时间显示的格式


//-------------------------------------------------------------------------------------------------------------------//


// ISO 8601


ISO 8601：日期部分遵循以下格式：YYYY-MM-DD，显示为 2017-06-01

如果包括了 ISO 时间，则时间和时区会追加到日期中的 T 标志符之后，显示为 2016-06-01T14:41:36-08:00

[注]ISO 8601 格式对于保持日期有序很有帮助，当文件以字母顺序从 A-Z 排序时，其 ISO 8601 日期列表会以时间顺序显示


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// RFC 2822


用于在 HTTP 和电子邮件标题等位置统一表示日期和时间的互联网信息格式

RFC 2822 包括星期几（短）、数字日期、月份的三字母缩写、年、时间和时区，显示为 01 Jun 2016 14:31:46 -0700


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

## momentjs

#### api dir

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


|
|- momentjs api dir
|- 
|- 
|- parse                    // 根据不同的参数 返回 momentObj
|- get + set                // momentjs 支持 链式编程( 原理: return: this; )
|- 
|- 
|- manipulate               // 增/删/改/查 ...
|- 
|- 
|- display                  // 获取 字符串形式 的 momentObj 中的属性值用于展示到页面
|- query                    // 根据 momentObj 中的数据，依据指定规则，查询查询相关属性值
|- 
|- 
|- customize                // 自定 momentjs.method 查询的返回值
|- durations                // (多以 毫秒为参数单位)
|- 
|- 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### env language

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * env language
 * 
 * 
 * moment-with-locales.js
 */

momentjs 部分 api 会根据语言环境的不同 展示出不同的语言及返回值


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 设置全局

moment.locale(language: string);                // 全局设置 moment 的语言环境


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### best practices

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
```