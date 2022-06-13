#### 反转字符串

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var str = 'abc123';

var res = str.split('').reverse().join('');

console.log(res);           // '321cba'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### 在有序数组中找出指定值，返回其索引( 二分法查找 )

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### 判断数组是否为对称数组

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// eg: [a, b, c, b, a], [a, b, c, c, b, a]

function symmetry(arr) {

    let start = 0,
        end = arr.length - 1;

    while (true) {

        if (arr[start] !== arr[end]) {          // arr[start++] ?= arr[end--]

            return false;
        }

        if (start >= end) {                     // Export

            break;
        }

        start++;
        end--;
    }

    return true;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### 查询子串首次出现的位置

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```

#### 计算数组中，最大连续增长子序列的长度

``` javascript
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function getMaxLen(arr) {

    let addNum = 1,
        len = 0;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > arr[i - 1]) {

            addNum++;

        } else {

            len = addNum > len ? addNum : len;

            addNum = 1;
        }
    }

    len = addNum > len ? addNum : len;              // 如果最长的序列在最后

    return len;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
```






