///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// bubble sort


//-------------------------------------------------------------------------------------------------------------------//


const arr = [4, 1, 6, 9, 3, 2, 8, 7];

const getMin = (arr) => {

    if (!arr) return;

    let j = -1;

    // console.log(j);

    for (let i = 0; i < arr.length; i++) {

        const item = arr[i];

        if ((item !== null && arr[i] < arr[j]) || (item != null && j === -1)) {

            j = i;
        }
    }

    const min = arr[j];

    arr[j] = null;

    return min;
};


const bubbleSort = (arr) => {

    const newArr = new Array(arr.length);

    for (let i = 0; i < newArr.length; i++) {

        newArr[i] = getMin(arr);
    }

    return newArr;
}


// console.log(getMin(arr));
// console.log(getMin(arr));

// const sortArr = bubbleSort(arr);

// console.log(sortArr);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// [4, 1, 6, 9, 3, 2, 8, 7];           // 4 vs 1 需要交换
// [1, 4, 6, 9, 3, 2, 8, 7];           // 4 vs 6 不需要交换
// [1, 4, 6, 9, 3, 2, 8, 7];           // 6 vs 9 不需要交换
// [1, 4, 6, 3, 2, 9, 8, 7];           // 9 vs 2 需要交换
// [1, 4, 6, 3, 2, 8, 9, 7];           // 9 vs 8 需要交换
// [1, 4, 6, 3, 2, 8, 7, 9];           // 9 vs 7 需要交换


// 根据条件判断是否需要交换
function compare(a, b) {
    return b < a;
}


// 交换数据中两个子项的位置
function exchange(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}


// 循环对比排序
function sort(arr) {

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length - 1 - i; j++) {

            if (compare(arr[j], arr[j + 1])) {

                exchange(arr, j, j + 1);
            }
        }
    }
}


sort(arr);
console.log(arr);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////