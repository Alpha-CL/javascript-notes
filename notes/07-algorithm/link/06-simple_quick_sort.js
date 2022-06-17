///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// simple quick sort


//-------------------------------------------------------------------------------------------------------------------//


// 思路
//
// 1. 首先要是一个真数组, 并且数组的长度必须大于等于一
// 2. 假设第一个子项为 对比项
//      - 若比对比项小 则添加到 左边
//      - 若比对比项大 则添加到 右边
// 3. 递归 左侧&右侧 集合


const arr = [4, 1, 6, 9, 3, 2, 8, 7];


function simpleQuickSort(arr) {

    if (!Array.isArray(arr) || arr.length === 0) return [];

    let leader = arr[0],
        left = [],
        right = [];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < leader) left.push(arr[i]);
        else right.push(arr[i]);
    }

    left = simpleQuickSort(left);
    right = simpleQuickSort(right);

    left.push(leader);

    return left.concat(right);
}


const newArr = simpleQuickSort(arr);
console.log(newArr);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////