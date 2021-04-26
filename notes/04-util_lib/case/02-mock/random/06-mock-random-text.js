import Mock from "mockjs";

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Mock.Random();
 *
 *
 */

let Random = Mock.Random;


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * Random.paragraph(min?, max?);                // 英文
 *
 * Random.paragraph(len);
 *
 *
 * @min: 指示文本中句子的最小个数。默认值为 3
 * @max: 指示文本中句子的最大个数。默认值为 7
 * @len: 指示文本中句子的个数。默认值为 3 到 7 之间的随机数
 *
 *
 * 随机生成 "一段" 英文文本
 */

console.log("Random.paragraph(): ", Random.paragraph());

console.log("Random.paragraph(6): ", Random.paragraph(6));

console.log("Random.paragraph(3, 7): ", Random.paragraph(3, 7));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Random.cparagraph(min?, max?);               // 中文
 *
 * Random.cparagraph(len);
 *
 *
 * @min: 指示文本中句子的最小个数。默认值为 3
 * @max: 指示文本中句子的最大个数。默认值为 7
 * @len: 指示文本中句子的个数。默认值为 3 到 7 之间的随机数
 *
 *
 * 随机生成 "一段" 中文文本
 */

console.log("Random.cparagraph(): ", Random.cparagraph());

console.log("Random.cparagraph(6): ", Random.cparagraph(6));

console.log("Random.cparagraph(3, 7): ", Random.cparagraph(3, 7));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.sentence(min?, max?);                 // 英文
 *
 * Random.sentence(len);
 *
 *
 * @min: 指示文本中句子的最小个数。默认值为 12
 * @max: 指示文本中句子的最大个数。默认值为 18
 * @len: 指示文本中句子的个数。默认值为 12 到 18 之间的随机数
 *
 *
 * 随机生成一个英文 "句子"，第一个单词的首字母大写
 */

console.log("Random.sentence(): ", Random.sentence());

console.log("Random.sentence(11): ", Random.sentence(11));

console.log("Random.sentence(11, 16): ", Random.sentence(11, 16));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Random.csentence(min?, max?);                // 中文
 *
 * Random.csentence(len);
 *
 *
 * @min: 指示文本中句子的最小个数。默认值为 12
 * @max: 指示文本中句子的最大个数。默认值为 18
 * @len: 指示文本中句子的个数。默认值为 12 到 18 之间的随机数
 *
 *
 * 随机生成一个中文 "句子"
 */

console.log("Random.csentence(): ", Random.csentence());

console.log("Random.csentence(12): ", Random.csentence(12));

console.log("Random.csentence(11, 16): ", Random.csentence(11, 16));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.word(min?, max?);                     // 英文
 *
 * Random.word(len);
 *
 *
 * @min: 指示单词中字符的最小个数。默认值为 3
 * @max: 指示单词中字符的最大个数。默认值为 10
 * @len: 指示单词中字符的个数。默认值为 3 到 10 之间的随机数
 *
 *
 * 随机生成 "一个" 单词
 */

console.log("Random.word(): ", Random.word());

console.log("Random.word(11): ", Random.word(11));

console.log("Random.word(11, 16): ", Random.word(11, 16));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Random.cword(pool?, min?, max?);             // 中文
 *
 *
 * @pool: 汉字字符串。表示汉字字符池，将从中选择一个汉字字符返回
 * @min: 随机汉子字符串最小长度，默认值为 1
 * @max: 随机汉子字符串的最大长度，默认值为 1
 *
 *
 * 随机生成 "一个" 汉字
 */

console.log("Random.cword(): ", Random.cword());

console.log("Random.cword('1,2,3,4,5'): ", Random.cword('1,2,3,4,5'));

console.log("Random.cword('1,2,3,4,5', 3): ", Random.cword('1,2,3,4,5', 3));

console.log("Random.cword('1,2,3,4,5', 3,  5): ", Random.cword('1,2,3,4,5', 3, 5));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * Random.title(min?, max?);                    // 英文
 *
 * Random.title(len);
 *
 *
 * @min: 指示单词中字符的最小个数。默认值为 3
 * @max: 指示单词中字符的最大个数。默认值为 7
 * @len: 指示单词中字符的个数。默认值为 3 到 7 之间的随机数
 *
 *
 * 随机生成一句标题，其中每个单词的首字母大写
 */

console.log("Random.title(): ", Random.title());

console.log("Random.title(): ", Random.title(3, 7));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * Random.ctitle(min?, max?);                   // 中文
 *
 *
 * @min: 指示单词中字符的最小个数。默认值为 3
 * @max: 指示单词中字符的最大个数。默认值为 7
 * @len: 指示单词中字符的个数。默认值为 3 到 7 之间的随机数
 *
 *
 * 随机生成一句中文标题
 */

console.log("Random.ctitle(): ", Random.ctitle());

console.log("Random.ctitle(): ", Random.ctitle(3, 7));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////