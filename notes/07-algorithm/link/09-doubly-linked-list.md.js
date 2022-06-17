///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//-------------------------------------------------------------------------------------------------------------------//


/**
 * 双向链表
 *
 *
 ** 优点：无论给出哪个节点, 都对整个链表进行遍历
 ** 缺点: 多消耗一个引用空间, 并且构建双向链表比较复杂
 */


function Node(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
}


const node_01 = new Node(1),
    node_02 = new Node(2),
    node_03 = new Node(3),
    node_04 = new Node(4),
    node_05 = new Node(5);


node_01.prev = null;
node_01.next = node_02;
node_02.prev = node_01;
node_02.next = node_03;
node_03.prev = node_02;
node_03.next = node_04;
node_04.prev = node_03;
node_04.next = node_05;
node_05.prev = node_04;
node_04.next = node_05;
node_05.prev = node_04;
node_05.next = null;



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////