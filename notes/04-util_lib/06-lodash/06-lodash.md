# lodash

#### Array

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * _.chunk(arr, size:1): newArr;
 *
 *
 * 根据指定 size，将数组拆分为多个 二维数组( 若最后的拆分个数小雨 size，则直接保存 )
 */

console.log("_.chunk: ", _.chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2));

console.log("_.chunk: ", _.chunk(['a', 'b', 'c', 'd', 'e'], 2));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.compact(arr): newArr;
 *
 *
 * 排除掉数组中转换为 布尔类型为 false 的项，并 返回一个新数组
 */

console.log("_.compact: ", _.compact([0, 1, false, 2, "", null, NaN, 3, undefined]));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.difference(arr, diffArr): newArr;
 *
 *
 * 根据第二数组中的每一项，排除第一个数组中相同的值，并返回一个新数组
 */


console.log("_.difference: ", _.difference([1, 2, 3, 4, 5, 6], [1, 3, 5]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.differenceBy(arr, diffAArr, iterator): newArr;
 *
 *
 * 先将所有数组中的每一项交由 iterator 处理后
 *
 * 根据第二数组中的每一项，排除第一个数组中相同的值，并返回一个新数组
 */

console.log("_.differenceBy", _.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.differenceWith(arr, diffAArr, callback): newArr;
 *
 *
 * 将数组中每一项比较的方式交由 callback 处理
 *
 * 返回一个新数组
 */

console.log("_.differenceWith: ", _.differenceWith([
        {'x': 1, 'y': 2}, {'x': 2, 'y': 1}],
    [{'x': 1, 'y': 2}],
    _.isEqual));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.drop(arr, num:1): newArr;                     // 正序切片
 *
 *
 * 从左向右，去除 arr 中 num 个子项，并返回一个新数组
 */

console.log("_.drop: ", _.drop([1, 2, 3, 4, 5, 6, 7, 8], 3));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.dropRight(arr, num: 1): newArr;                // 倒序切片
 *
 *
 * 从右向坐，去除 arr 中 num 个子项，并返回一个新数组
 */

console.log("_.dropRight: ", _.dropRight([1, 2, 3, 4, 5, 6, 7, 8], 3));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.dropRightWhile(arr, iterator): newArr;
 *
 *
 * 从右向左，去除 arr 中从 iterator 开始返回 false 到结尾部分的子项目
 *
 * 返回一个新数组包含剩余 子项
 */

console.log("_.dropRightWhile: ", _.dropRightWhile([

    {'user': 'barney', 'active': true},
    {'user': 'fred', 'active': false},
    {'user': 'pebbles', 'active': false}

], function (value, index, array) {

    return !value.active;

}));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.dropWhile(arr, iterator): newArr;
 *
 *
 * 从左向右，去除 arr 中从 iterator 开始返回 false 到结尾部分的子项目
 *
 * 返回一个新数组包含剩余 子项
 */

console.log("_.dropWhile: ", _.dropWhile([

    {'user': 'barney', 'active': false},
    {'user': 'fred', 'active': false},
    {'user': 'pebbles', 'active': true}

], function (value, index, array) {

    return !value.active;

}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.take(arr, num:1): newArr;
 *
 *
 * 从左向右，提取 arr 中 num 个子项，作为新数组的子项返回
 */

console.log("_.take: ", _.take([1, 2, 3, 4, 5, 6, 7, 8], 3));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.takeRight(arr, num:1): newArr;
 *
 *
 * 从右向左，提取 arr 中 num 个子项，作为新数组的子项返回
 */

console.log("_.takeRight: ", _.takeRight([1, 2, 3, 4, 5, 6, 7, 8], 3));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.takeWhile(arr, num:1): newArr;
 *
 *
 * 从右向左，提取 arr 中从 iterator 开始返回 false 到结尾部分的子项目
 *
 * 作为新数组的子项返回
 */

console.log("_.dropRightWhile: ", _.takeRightWhile([

    {'user': 'barney', 'active': true},
    {'user': 'fred', 'active': false},
    {'user': 'pebbles', 'active': false}

], function (value, index, array) {

    return !value.active;

}));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.takeRightWhile(arr, num:1): newArr;
 *
 *
 * 从左向右，提取 arr 中从 iterator 开始返回 false 到结尾部分的子项目
 *
 * 作为新数组的子项返回
 */

console.log("_.takeWhile: ", _.takeWhile([

    {'user': 'barney', 'active': true},
    {'user': 'fred', 'active': false},
    {'user': 'pebbles', 'active': false}

], function (value, index, array) {

    return !value.active;

}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.flatten(arr): newArr;
 *
 *
 * 减少 1 级 arr 的嵌套深度，并返回一个新数组
 */

console.log("_.flatten: ", _.flatten([1, [2, [3, [4, [5]]]]]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.flattenDeep(arr): newArr;
 *
 *
 * 递归减少 arr 所有的嵌套，并返回一个新数组
 */

console.log("_.flattenDeep: ", _.flattenDeep([1, [2, [3, [4, [5]]]]]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.flattenDepth(arr, depth:1): newArr;
 *
 *
 * 减少 depth 级 arr 的嵌套深度，并返回一个新数组
 */

console.log("_.flattenDepth: ", _.flattenDepth([1, [2, [3, [4, [5]]]]], 2));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.head(arr): firstItem;
 *
 *
 * 返回数组中第一个一子项的新数组
 */

console.log("_.head: ", _.head([1, 2, 3, 4, 5, 6]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.last(arr): lastItem;
 *
 *
 * 返回数组中最后一子项的新数组
 */

console.log("_.last: ", _.last([1, 2, 3, 4, 5, 6]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.initial(arr): newArr;
 *
 *
 * 返回除了数组中最后一项的其他子项的新数组
 */

console.log("_.initial: ", _.initial([1, 2, 3, 4, 5, 6]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.tail(arr): newArr;
 *
 *
 * 返回除了数组中最后一项的其他子项的新数组
 */

console.log("_.tail: ", _.tail([1, 2, 3, 4, 5, 6]));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.intersection(arr...): newArr;                      // 交集
 *
 * _.intersectionBy(arr..., iterator): newArr;
 *
 * _.intersectionWith(arr..., callback): newArr;
 *
 *
 * 返回一个包含所有传入 "数组交集" 元素的新数组
 */

console.log("_.intersection: ", _.intersection([1, 2, 3], [2, 3, 4], [3, 4, 5]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.xor(arr...): newArr;                               // 差集
 *
 * _.xorBy(arr..., iterator): newArr;
 *
 * _.xorWith(arr..., callback): newArr;
 *
 *
 * 返回一个包含所有传入 "数组差集" 元素的新数组
 */

console.log("_.xor: ", _.xor([1, 2, 3], [2, 3, 4]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.union(arr...): newArr;                             // 并集
 *
 * _.unionBy(arr..., iterator): newArr;
 *
 * _.unionWith(arr..., callback): newArr;
 *
 *
 * 返回一个包含所有传入 "数组并集" 元素的新数组
 */

console.log("_.union: ", _.union([1, 2, 3], [2, 3, 4], [3, 4, 5]));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.nth(arr, num: 0): arr[num];
 *
 *
 * 返回 arr 数组的第 num 个元素
 *
 * 如果n为负数，则返回从数组结尾开始的第n个元素
 */

console.log("_.nth: ", _.nth(['a', 'b', 'c', 'd'], -2));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.pull(arr, val...): newArr;                     // 根据 val... 匹配移除
 *
 * _.pull(arr, [val...]): newArr;                   // 根据 [val...] 匹配移除
 *
 * _.pullBy(arr, val..., iterator): newArr;
 *
 * _.pullWith(arr, val..., callback): newArr;
 *
 *
 * 移除数组 arr 中 所有和给定值相等的元素
 */

console.log("_.pull", _.pull([1, 2, 3, 1, 2, 3], 2));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.remove(arr, iterator): newArr;                     // 改变原数组
 *
 *
 * 返回移除元素组成的新数组
 */

console.log("_.remove: ", _.remove([1, 2, 3, 4, 5, 6], function (value, index, array) {

    return index > 2;
}));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.without(arr, val...): newArr;                    // 返回新数组
 *
 *
 * 返回过滤值后的新数组
 */

console.log("_.without: ", _.without([1, 2, 3, 4, 5, 6], 1, 2, 3));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.uniq(arr): newArr;
 *
 * _.uniqBy(arr, iterator): newArr;
 *
 * _.uniqWith(arr, callback): newArr;
 *
 *
 * 返回新的去重后的数组
 */

console.log("_.uniq: ", _.uniq([1, 1, 1, 2, 2, 2, 3, 3]));


//-------------------------------------------------------------------------------------------------------------------//



/**
 * _.zip(arr...): newArr;
 *
 *
 * 将传入数组索引相同的子项重新组合为新的二维数组返回
 */

console.log("_.zip: ", _.zip(['fred', 'barney'], [30, 40], [true, false]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.zipObject(arr...): newArr;
 *
 *
 * 将传入的第一个数组中的子项作为 key，第二个数组的子项作为 value，返回一个新的对象
 */


console.log("_.zipObjectt: ", _.zipObject(['a', 'b'], [1, 2]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.zipWith(arr..., iterator): newArr;
 *
 *
 * 根据 iterator 指定分组的值应该如何被组合，并返回一个新的二维数组
 */

console.log("_.zipWith: ", _.zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {

    return a + b + c;

}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.unzip(arr...): newArr;
 *
 * _.unzipWith(arr..., iterator): newArr;
 *
 *
 * 返回重组元素的新数组
 */

const zipped = _.zip(['fred', 'barney'], [30, 40], [true, false])

console.log("_.unzip: ", _.unzip(zipped));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### 