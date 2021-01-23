/**
 * @method enqueue 
 * @method dequeue
 * @method print
 * @method size
 * @method front
 * @method isEmpty
 */

class Queue { 

    constructor(values = []) {
        this.values = values;
    }

    enqueue = (value) => {
        this.values.push(value);
    }

    dequeue = () => {
        return this.values.shift();
    }

    size = () => {
        return this.values.length;
    }

    print = () => {
        console.log(this.values);
    }

    front = () => {
        return this.values[0];
    }

    isEmpty = () => {
        return (this.values === []);
    }
}

let queue = new Queue();
let array = [1,2,3,4,5];

array.forEach(i => {
    queue.enqueue(i);
});

queue.print();
console.log(queue.dequeue());
queue.print();
