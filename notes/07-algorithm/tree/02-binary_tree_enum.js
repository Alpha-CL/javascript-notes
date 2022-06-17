///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//-------------------------------------------------------------------------------------------------------------------//


//                     A
//                   /    \
//                  B      C
//                /  \    /  \
//               D    E  F    G


function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}


let A = new Node("A"),
    B = new Node("B"),
    C = new Node("C"),
    D = new Node("D"),
    E = new Node("E"),
    F = new Node("F"),
    G = new Node("G");


A.left = B;
A.right = C;
B.left = D;
B.left = E;
C.left = F;
C.right = G;


//                     A
//                   /    \
//                  B      C
//                /  \    /  \
//               D    E  F    G


// 前序遍历: 先打印当前的. 再打印左边的子树, 再打印右边的子树
function f1(root) {

    if (root == null) return;

    console.log(root.value);
    f1(root.left);
    f1(root.right);
}

f1(A);

console.log('\n');


//                     A
//                   /    \
//                  B      C
//                /  \    /  \
//               D    E  F    G


// 中序遍历:
function f2(root) {

    if (root == null) return;

    f1(root.left);
    console.log(root.value);
    f1(root.right);
}

f2(A);
console.log('\n');


//                     A
//                   /    \
//                  B      C
//                /  \    /  \
//               D    E  F    G


// 后序遍历:
function f3(root) {

    if (root === null) return;

    f1(root.left);
    f1(root.right);
    console.log(root.value);
}

f3(A);

//-------------------------------------------------------------------------------------------------------------------//


// 常见提问
//
//
// 1. 给出二叉树, 写出前中后序遍历
// 2. 写出 前序,中序,后序 遍历的代码
// 3. 给出 前序, 中序 还原 二叉树
// 4. 给出 后序,中序, 还原 二叉树


//- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -//


// 3. 给出 前序, 中序 还原 二叉树, 并写出后续遍历


//                     A
//                   /    \
//                  B      C
//                /  \    /  \
//               D    E  F    G

const forwardOrder = [A,   B, D, E,   C, F, G],

       middleOrder = [D, B, E,   A,   F, C, G],

         backOrder = [B, E, B,   F, G, C,   A];


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////