/**
 * @problem - https://leetcode.com/problems/baseball-game/
 */

class Stack {

    constructor(count = 0, values = []) {
        this.count = count;
        this.values = [];
    }

    push = (value) => {
        this.values[this.count] = value;
        this.count++;
    }

    pop = () => {
        let value = this.values[this.count - 1];
        this.count--;
        this.values.splice(this.count);
        return value;
    }

    size = () => {
        return this.values.length;
    }

    top = () => {
        return this.values[this.count - 1];
    }

    secondLast = () => {
        return this.values[this.count - 2];
    }

    display = () => {
        this.values;
    }
}

let stack = new Stack();
let array = ["5","2","C","D","+"];

array.forEach(i => {
    if(i !== "C" && i !== "D" && i !== "+") {
        stack.push(parseInt(i));
    } else if(i === "C") {
        stack.pop();
    } else if(i === "D") {
        stack.push(stack.top() * 2);
    } else if(i === "+") {
        stack.push(stack.top() + stack.secondLast());
    }
});

console.log(stack.display().reduce((accumulator, currentValue) => accumulator + currentValue));