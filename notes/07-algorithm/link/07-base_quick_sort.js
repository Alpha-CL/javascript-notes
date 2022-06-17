///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// base quick sort


//-------------------------------------------------------------------------------------------------------------------//


// 思路
//
// 左闭右开
//
//
//

const arr = [4, 1, 6, 9, 3, 2, 8, 7];


//   4, 1, 6, 9, 3, 2, 8, 7
// 4
// 1
// 6
// 9
// 3
// 2
// 8
// 7


function exchange(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


function baseQuickSort(arr, begin, end) {

    if (!arr || begin >= end - 1) return;

    let left = begin,
        right = end;

    do {

        do left++; while (left < right && arr[left] < arr[begin]);
        do right--; while (right > left && arr[right] > arr[begin]);

        if (left < right) exchange(arr, left, right);

    } while (left < right)


    let exchangePointer = left === right ? right - 1 : right;

    exchange(arr, begin, exchangePointer)

    baseQuickSort(arr, begin, exchangePointer);
    baseQuickSort(arr, exchangePointer + 1, end);
}


function test(arr) {

    baseQuickSort(arr, 0, arr.length)
}

test(arr);

console.log(arr);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
























