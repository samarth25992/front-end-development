/**
 * @Problem - https://leetcode.com/problems/sort-characters-by-frequency/
 */

class Heap {
    constructor(heap = []) {
        this.heap = heap;
    }

    insert = (data) => {
        this.heap.push(data);
        let index = this.heap.length - 1;
        let parent = this.getParent(index);

        while(index > 0 && this.heap[index][1] > this.heap[parent][1]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
            parent = this.getParent(index);
        }
    }

    remove = () => {
        let largest = this.heap[0];

        if (this.heap.length > 1) {
            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);

            let i = 0;
            let left = this.getLeftChild(i);
            let right = this.getRightChild(i);

            while(this.heap[left] !== undefined &&
                  this.heap[right] !== undefined &&
                  (this.heap[left][1] > this.heap[i][1] ||
                  this.heap[right][1] > this.heap[i][1])
            ) {
                if(this.heap[left][1] > this.heap[right][1]) {
                    [this.heap[left], this.heap[i]] = [this.heap[i], this.heap[left]];
                    i = left;
                } else {
                    [this.heap[right], this.heap[i]] = [this.heap[i], this.heap[right]]
                    i = right;
                }

                left = this.getLeftChild(i);
                right = this.getRightChild(i);
            }

            if(this.heap[right] === undefined && this.heap[left] !== undefined && this.heap[left][1] > this.heap[i][1]) {
                [this.heap[left], this.heap[i]] = [this.heap[i], this.heap[left]];
            }

        } else if (this.heap.length === 1) {
            this.heap.splice(0, 1);
        } else {
            return null;
        }

        return largest;
    }

    getParent = (index) => {
        return Math.floor((index - 1) / 2);
    }

    getLeftChild = (index) => {
        return 2 * index + 1;
    }

    getRightChild = (index) => {
        return 2 * index + 2;
    }
}

/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let str = s.split('');
    let freqStr = "";
    let map = new Map();
    let heap = new Heap();

    str.forEach(s => {
        map.has(s) ? map.set(s, map.get(s) + 1) : map.set(s, 1);
    });

    for (let entry of map) {
        heap.insert(entry);
    }

    for (let entry of map) {
        let item = heap.remove();

        while(item[1]) {
            freqStr += item[0];
            item[1]--;
        }
    }

    return freqStr;
};

//frequencySort("raaeaedere");