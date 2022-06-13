///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/**
 * 反转字符串
 *
 */

var str = 'abc123';

var res = str.split('').reverse().join('');

console.log(res);           // '321cba'


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 在有序数组中找出指定值，返回其索引( 二分法查找 )
 *
 * must: 有序队列
 */

var arr = [1, 3, 5, 7, 9, 10, 11, 14, 15, 18];

function getIndex1(arr, val) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === val) {

            return i;
        }
    }
}

console.log(getIndex1(arr, 5));


function getIndex2(arr, val) {

    return arr.findIndex(function (value) {

        return value === val;
    });
}

console.log(getIndex2(arr, 5));


/**
 * arr = [1, 3, 5, 7, 9, 10, 11, 14, 15, 18];
 *
 *
 * step1:   start: 0
 *          middle: (start + end) / 2
 *          end: arr.length - 1
 *
 * step2:   target == arr.middle ? return middle : end = middle - 1;
 *
 *
 */

function getIndex(arr, val) {

    let start = 0,
        end = arr.length - 1,
        middle;

    while (start <= end) {                          // Export

        middle = (start + end) / 2;

        if (val === arr[middle]) {

            return middle;

        } else if (val < arr[middle]) {             // middle left

            end = middle - 1;

        } else if (val > arr[middle]) {             // middle right

            start = middle + 1;
        }
    }

    return -1;                                      // if no search
}


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 判断数组是否是对称数组
 *
 * eg: [a, b, c, b, a], [a, b, c, c, b, a]
 *
 */

var arr1 = ['a', 'b', 'c', 'd', 'c', 'b', 'a'],
    arr2 = ['a', 'b', 'c', 'c', 'b', 'a'],
    arr3 = ['a', 'b', 'c', 'a', 'b', 'c'];


function symmetry1(arr) {

    let newArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {

        newArr.push(arr[i]);
    }

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] !== newArr[i]) {

            return false;
        }
    }

    return true;
}

/**
 * step1:    start: 0
 *           end: arr.length
 *
 * step2:    start++; <= middle => end--;
 *
 *
 *
 */

// function symmetry(arr) {
//
//     let start = 0,
//         end = arr.length - 1;
//
//     for (let i = 0; i < arr.length; i++) {
//
//         if (arr[start] !== arr[end]) {
//
//             return false;
//         }
//
//         start++;
//         end--;
//     }
//
//     return true;
// }


function symmetry(arr) {

    let start = 0,
        end = arr.length - 1;

    // while (true) {
    //
    //     /**
    //      *
    //      * 这里分别处理奇数与偶数的情况
    //      *
    //      * 1. 如果是奇数，start 和 end 相等的时候，就已经找到了最后一个，
    //      *    如果再走一次，start 就大于 end 了，此时就要跳出循环( 当前那次还是要走，过了当前那次就不能再走了 )
    //      *
    //      * 2. 如果是偶数，start 和 end 最后一次是挨着的，如果再走一次 start 和 end 就相等了
    //      *
    //      */
    //
    //     if (arr[start] !== arr[end]) {          // arr[start++] ?= arr[end--]
    //
    //         return false;
    //     }
    //
    //     if (start >= end) {                     // Export
    //
    //         break;
    //     }
    //
    //     start++;
    //     end--;
    // }

    while (start < end) {

        if (arr[start] !== arr[end]) {          // arr[start++] ?= arr[end--]

            return false;
        }

        start++;
        end--;
    }

    return true;
}

console.log(
    symmetry(arr1),
    symmetry(arr2),
    symmetry(arr3)
);


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 查询子串首次出现的位置
 *
 * 原串: 'c'
 * 子串: 'axz'
 *
 */

var str = 'abccbaxzab',
    substr = 'axz';

console.log(str.indexOf(substr));

/**
 *
 * abccbaxzab
 * 0123456789
 *                      i
 * 0
 * axz                  0
 *  1
 *  axz                 1
 *   2
 *   axz                2
 *    3
 *    axz               3
 *     4
 *     axz              4
 *      5
 *      axz             5
 *
 * strIndex = subIndex + moveNumber
 *
 */

function getIndex(str, sub) {

    for (let i = 0; i <= str.length - sub.length; i++) {

        for (let j = 0; j < sub.length; j++) {

            if (sub[j] !== str[i + j]) {

                break;
            }

            if (j === sub.length - 1) {

                return i;
            }
        }
    }

    return -1;
}

console.log(getIndex(str, substr));


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 计算数组中，最大连续增长子序列的长度
 *
 * eg: [1,2,3,4,1,2,3,4,5,1,2,3]
 *
 * result: 5
 */


var arr = [1, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6, 7];


/**
 *
 *
 *
 *
 */


function getMaxLen(arr) {

    let addNum = 1,
        len = 0;

    /**
     * arr[-1] = undefined
     *
     * arr[arr.length + 1] = undefined
     */

    for (let i = 1; i < arr.length + 1; i++) {

        if (arr[i] > arr[i - 1]) {

            addNum++;

        } else {

            len = addNum > len ? addNum : len;

            addNum = 1;
        }
    }

    // len = addNum > len ? addNum : len;              // 如果最长的序列在最后

    return len;
}

console.log(getMaxLen(arr));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
