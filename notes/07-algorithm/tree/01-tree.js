///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//-------------------------------------------------------------------------------------------------------------------//


function Node(value) {

    this.value = value;
    this.neighbors = [];
}


let a = new Node("a"),
    b = new Node("b"),
    c = new Node("c"),
    d = new Node("d"),
    e = new Node("e"),
    f = new Node("f");


a.neighbors.push(b);
a.neighbors.push(c);
a.neighbors.push(f);

b.neighbors.push(a)
b.neighbors.push(d)
b.neighbors.push(e)

c.neighbors.push(a)

d.neighbors.push(b)







///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////