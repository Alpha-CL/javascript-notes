///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 反转链表

//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//

/**
 * linkedList [ node_01, node_02, node_03, node_04, node_05 ];
 *
 *
 * 先找到最后一个节点
 * node_01.next = null;
 */


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


// 模拟链表
//
// const linkedList = {
//     node_01: {
//         value: 1,
//         next: node_02
//     },
//     node_02: {
//         value: 1,
//         next: node_03
//     },
//     node_03: {
//         value: 1,
//         next: node_04
//     },
//     node_04: {
//         value: 1,
//         next: node_05
//     },
//     node_05: {
//         value: 1,
//         next: null
//     }
// };

// 倒序判断出口: first_child = null;
function reverseLinkedList(root) {

    /** 出口_02: 判断链表的 -1 项 **/
    if (root === null) return;

    console.log(root.value);

    reverseLinkedList(root.next);
}

// 正序判断出口: last_child.next = null;
function reverseRoot(root) {

    let temp,
        nextChild = root.next,              // 当前节点后的，第一个子节点
        secondChild = nextChild.next;       // 当前节点后的，第二个子节点

    /** 出口_01: 判断链表倒数第二项 **/
    if (secondChild === null) {             //

        nextChild.next = root;              //
        return nextChild;                   //

    } else {

        temp = reverseRoot(nextChild);

        nextChild.next = root;              //
        root.next = null;                   //

        return temp;                        //
    }
}

reverseLinkedList(reverseRoot(node_01));


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
