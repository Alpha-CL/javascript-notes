///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 栈: 先进后出

function Stack() {

    this.value = [];

    this.push = (item) => {
        return this.value.push(item);
    }

    this.pop = () => {
        return this.value.pop();
    }
}


const stack = new Stack();

stack.push(1);
stack.push(2);
stack.pop();
stack.push(3);
stack.pop();

console.log(stack.value);


//-------------------------------------------------------------------------------------------------------------------//


// 队列: 先进先出

function Queue() {

    this.value = [];

    this.push = (item) => {
        return this.value.push(item);
    }

    this.pop = () => {
        return this.value.shift();
    }
}


const queue = new Queue();

queue.push(1);
queue.push(2);
queue.pop();
queue.push(3);
queue.pop();

console.log(queue.value);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////