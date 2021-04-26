///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * _.countBy(arr, iterator): newObj;
 *
 *
 * key: 经过 iterator, 执行处理 arr 中每个子项后返回的结果
 *
 * val: 返回该 key 出现的次数
 *
 * 返回一个组成集合对象: {key:val...}
 */

console.log("_.countBy: ", _.countBy(["one", "two", "three"], "length"));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.groupBy(arr, iterator): newObj;
 *
 *
 * key: iteratee 遍历 arr 中的每个元素返回的结果
 *
 * val: 返回相同 iterator 值的 子项
 *
 * 返回一个组成聚合的对象: {key:val...}
 */

console.log("_.groupBy: ", _.groupBy(["one", "two", "three"], "length"));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.flatMap(arr, ?iterator): newArr;                       // 减少一层
 *
 * _.flatMapDeep(arr, ?iterator): newArr;                   // 减少所有
 *
 * _.flatMapDepth(arr, ?iterator, depth): newArr;           // 指定减少层级
 *
 *
 * 可指定 iterator, 返回减少数组嵌套层级
 */

console.log("_.flatMap: ", _.flatMap([1, [2, [3, [4, [5]]]]]));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.invokeMap((collection: arr | fn | str, iterator, args): newArr;
 *
 *
 * @iterator: 每次迭代调用的函数
 * @args: 作为参数传递给 iterator
 *
 * 返回的结果数组
 */

console.log("_.invokeMao: ", _.invokeMap([123, 456], String.prototype.split, ''));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.keyBy(collection: arr | obj, iterator): newObj;
 *
 *
 * 返回指定传入数据中的某个 key 所对应的 value 作为返回值的 key，其所对应的数据作为 value，并返回
 */

console.log("_.keyBy: ", _.keyBy([

    {'dir': 'left', 'code': 97},
    {'dir': 'right', 'code': 100}

], function (o) {

    return String.fromCharCode(o.code);

}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.orderBy(collection: arr | obj, iterator，order: asc | desc): newArr;            // 可升 可降 排序
 *
 *
 * @order: asc( 升序 ) | desc( 降序 )
 *
 * 将数组或对象按照指定规则排序，默认升序列
 *
 * 返回排序排序后的新数组
 */

console.log("_.orderBy: ", _.orderBy([

    {'user': 'fred', 'age': 48},
    {'user': 'barney', 'age': 34},
    {'user': 'fred', 'age': 40},
    {'user': 'barney', 'age': 36}

], ['user', 'age'], ['asc', 'desc']));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.sortBy(collection: arr | obj, iterator));                                      // 仅可升级序排列
 *
 *
 * 将数组或对象按照指定规则升序排列
 *
 * 返回排序后的数组
 */

console.log("_.sortBy: ", _.sortBy([

    {'user': 'fred', 'age': 48},
    {'user': 'barney', 'age': 34},
    {'user': 'fred', 'age': 40},
    {'user': 'barney', 'age': 36}

], ['user', 'age']));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.partition(collection: arr | obj, iterator): newArr;
 *
 *
 * 根据传入的二维数组或对象，按照子项中指定属性划分并将指定属性返回
 */

console.log("_.partition: ", _.partition([

    {'user': 'barney', 'age': 36, 'active': false},
    {'user': 'fred', 'age': 40, 'active': true},
    {'user': 'pebbles', 'age': 1, 'active': false}

], function (o) {
    return o.active;
}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.reject(collection: arr | obj, iterator): newArr;
 *
 *
 * _.filter的反向方法
 *
 * 返回过滤后的新数组
 */

console.log("_.reject: ", _.reject([
    {'user': 'barney', 'age': 36, 'active': false},
    {'user': 'fred', 'age': 40, 'active': true}

], function (o) {

    return !o.active;

}));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.sample(collection: arr | obj): item;
 *
 *
 * 返回对象或数组中的一个随机子项
 */

console.log("_.sample: ", _.sample([1, 2, 3, 4, 5]));


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


/**
 * _.sampleSize(collection: arr | obj, size): item * size;
 *
 *
 * 返回对象或数组中指定随机个数的子项
 */

console.log("_.sampleSize: ", _.sampleSize([1, 2, 3, 4, 5], 2));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.shuffle(collection: arr | obj, iterator): newArr;
 *
 *
 * 返回随机打乱排序的新数组或对象
 */

console.log("_.shuffle: ", _.shuffle([1, 2, 3, 4, 5]));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * _.size(collection: arr | obj): length;
 *
 *
 * 返回指定集合的长度
 */

console.log("_.size of arr: ", _.size([1, 2, 3, 4]));

console.log("_.size of obj: ", _.size({'a': 1, 'b': 2}));

console.log("_.size of str: ", _.size('pebbles'));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////