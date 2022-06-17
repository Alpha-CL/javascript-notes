///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 枚举数组或链表: 考算法的逻辑中不能报错, 要考虑的相对严谨一些


//-------------------------------------------------------------------------------------------------------------------//

// array

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


console.log("enumArr");

let arr = [1, 2, 3, 4, 5, 6];

function enumArr(arr) {

    if (!arr) return;

    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i]);
    }
}

enumArr(arr);

console.log("enumArr");


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 递归枚举

console.log("recursionEnumArray");

function recursionEnumArray(arr, i) {

    // console.log(arr, i, arr.length);

    if (!arr || i >= arr.length) return;

    if (i < arr.length) {

        console.log(arr[i++]);
        recursionEnumArray(arr, i);
    }
}

recursionEnumArray(arr, 0);

console.log("recursionEnumArray");


//-------------------------------------------------------------------------------------------------------------------//

// linked list

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


function Node(value) {
    this.value = value;
    this.next = null;
}

let node_01 = new Node(1),
    node_02 = new Node(2),
    node_03 = new Node(3),
    node_04 = new Node(4),
    node_05 = new Node(5);

node_01.next = node_02;
node_02.next = node_03;
node_03.next = node_04;
node_04.next = node_05;


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


console.log("enumLinkedList");

function enumLinkedList(root) {

    let temp = root;

    while (true) {

        if (!!temp) {

            console.log(temp.value);

        } else {

            break;
        }

        temp = temp.next;
    }
}

enumLinkedList(node_01);

console.log("enumLinkedList");


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


console.log('recursionEnumLinkedList');

function recursionEnumLinkedList(root) {

    if (!root) return;                          // 递归寻找出口

    console.log(root.value);

    recursionEnumLinkedList(root.next);
}

recursionEnumLinkedList(node_01);

console.log('recursionEnumLinkedList');


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////