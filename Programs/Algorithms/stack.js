/**
 * @method push
 * @method pop
 * @method top
 * @method size
 */

class Stack {

    constructor() {
        this.count = -1;
        this.values = [];
    }
    push = (value) => {
        this.count++;
        this.values[this.count] = value;       
    }

    pop = () => {
        if(this.count === -1) {
            return undefined;
        }
        let value = this.values[this.count];
        this.count--;
        return value;
    }

    size = () => {
        return this.values;
    }

    top = () => {
        return this.values[this.count];
    }
}

let stack = new Stack();
let array = [1,2,3,4,5];

array.forEach(i => {
    stack.push(i);
});

console.log(stack.top());
console.log(stack.pop());
console.log(stack.top());