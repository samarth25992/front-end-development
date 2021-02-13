/**
 * @problem - https://leetcode.com/problems/min-stack/
 */

var MinStack = function() {
    this.stack = new Stack();
    this.minStack = new Stack();
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if(this.minStack.size() === 0) {
        this.minStack.push(x);
    } else if(x <= this.minStack.top()){
        this.minStack.push(x);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let removedElement = this.stack.pop();

    if(removedElement === this.minStack.top()) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack.top();
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack.top();
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */


class Stack {

    constructor(count = 0, values = []) {
        this.count = count;
        this.values = values;
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

    top = () => {
        return this.values[this.count - 1];
    }

    size = () => {
        return this.values.length;
    }
}