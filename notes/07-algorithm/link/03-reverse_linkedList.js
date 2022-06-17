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

// 出口: node.next = null;
function reverseLinkedList(root) {

    /** 出口: 判断链表的 -1 项 **/
    if (!!root) {
        console.log(root.value);
        reverseLinkedList(root.next);
    }
}

// reverseLinkedList(node_01);


// 出口: 下一个节点为 null
function getLastNode(root) {

    if (!root) return;

    // if (root.next) {
    //
    //     return getLastNode(root.next);
    //
    // } else {
    //
    //     console.log(root);
    //     return root;
    // }
    //

    return !!root.next ? getLastNode(root.next) : root;
}

const lastChild = getLastNode(node_01);

// console.log('lastChild: ' + lastChild.value);


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// node_01 -> node_02 -> node_03 -> node_04 -> node_05 -> null
//                                  |<---------------------->|
//                       |<-------------------------->|
//           |<-------------------------->|
// |<-------------------------->|

// reverseRoot(node_04)     // 弹栈       // node_05.next = node_04; return node_05;

// reverseRoot(node_03)     // 入栈       // node_04.next = node_03; node_03.next = null;
// reverseRoot(node_02)     // 入栈       // node_03.next = node_02; node_02.next = null;
// reverseRoot(node_01)     // 入栈       // node_02.next = node_01; node_01.next = null;


// 难理解: 虽然判断的是以 root.next.next === null( 仅用于判断是否是尾节点 ), 但实际改变的是 root.next( 当前节点 )的属性
//        ( 若以 root.next === null; 判断是否是尾节点, 则无法获知 当前节点的上一个节点 )
//
//       一次性获取三个节点
//             - 判断第三个节点是否为 null
//                  - 若是, 则第二个节点为 尾节点 并返回, 设置 第二个节点的 next 为 第一个节点
//                  - 若不是, 则将第二个节点的 next 指向第一个节点, 并重置 第一个节点的 next 为 null;
//
// 1. 找出口: 判断出尾节点( 根据 root.next.next === null 判断出 root.next 为尾节点 )
// 2. 重置 尾节点的 next 的指向 尾节点的上一个节点: root.next.next = root;
// 3. 若判断 不是 尾节点, 则递归 调用方法本体, 并传递 当前节点的下一个节点继续判断
// 4. 当出口执行, 则倒序执行压入栈的方法( 都不是尾节点 )
//      - 设置 当前节点的 next 指向 当前节点的上一个节 root.next.next = root;
//      - 重置当前节点的上一个节点的 next 指向 null, 避免死循环 root.next = null;


// 出口: node.next.next = null;
function reverseRoot(root) {


    let temp,
        nextChild = root.next,              // 当前节点后的 第一个子节点
        secondChild = root.next.next;       // 当前节点后的 第二个子节点


    if (root.next.next === null) {          // 出口: 若当前节点后的第二个子节点是为 null, 则当前节点后的第一个子节点是 最后一项

        console.log('cur_node: ', root)
        console.log('next_node: ', root.next)
        console.log('second_node: ', root.next.next)
        console.log('\n');

        // 理解
        // const lastNode = root.next;      // 尾节点
        // const prevNode = root;           // 尾节点的上一个节点
        // lastNode.next = prevNode;        // 设置 尾节点的 next 指向 尾节点的 上一个节点
        // return lastNode;                 // 出口

        root.next.next = root;              // 设置 当前节点后的第一个子节点( last_node ) 的 next 指向 当前节点( 上一个节点 )
        return root.next;                   // 返回当前节点后的 第一个节点( last_node )/也是链表的最后一个节点

    } else {

        temp = reverseRoot(root.next);      // 若当前节点后的第二个子节点是不为 null, 则递归入栈( first in last out )

        console.log('cur_node: ', root)
        console.log('next_node: ', root.next)
        console.log('second_node: ', root.next.next)
        console.log('\n');

        // 理解
        // const curNode = root.next;       // 当前节点
        // const prevNode = root;           // 当前节点的上一个节点
        // curNode.next = prevNode;         // 设置当前节点的 next 指向 当前节点的上一个节点
        // node.next = null;                // 重置节点 next 指向, 避免死循环

        root.next.next = root;              // 设置 当前节点后的第一个子节点的 next 指向 当前节点
        root.next = null;                   // 设置 当前节点 next 指向 null

        return temp;                        // 弹栈 根据入栈顺序的倒序弹出

    }
}

reverseLinkedList(reverseRoot(node_01));


////////////////////////s///////////////////////////////////////////////////////////////////////////////////////////////
