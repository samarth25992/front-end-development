/**
 * 
 * @Problem - https://leetcode.com/problems/maximum-frequency-stack/
 */
var FreqStack = function() {
    this.stack = [];
    this.count = 0;
    this.map = new Map();
};

/** 
 * @param {number} x
 * @return {void}
 */
FreqStack.prototype.push = function(x) {
    if(this.map.has(x)) {
        this.map.set(x, this.map.get(x) + 1);
    } else {
        this.map.set(x, 1);
    }
    this.stack[this.count] = {num: x, freq: this.map.get(x)};
    this.count++;
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function() {
    let element = this.stack[this.count - 1];
    let index = this.count - 1;

    for (let i = index; i > 0; i--) {
        if(this.stack[i].freq > element.freq) {
            element = this.stack[i];
            index = i;
        }
    }
    this.stack.splice(index, 1);
    this.count--;
    this.map.set(element.num, this.map.get(element.num) - 1);
    return element.num;
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 */

let freqStack = new FreqStack();
freqStack.push(1);
freqStack.push(1);
freqStack.push(1);
freqStack.push(2);

console.log(freqStack.pop());
console.log(freqStack.pop());

freqStack.push(2);
freqStack.push(2);
freqStack.push(1);

console.log(freqStack.pop());
console.log(freqStack.pop());
console.log(freqStack.pop());

console.log(freqStack.stack);