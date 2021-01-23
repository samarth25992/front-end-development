class MaxHeap {

    constructor(heap = []) {
        this.heap = heap;
    }

    insert = (value) => {
        this.heap.push(value);
        let index = this.heap.length - 1;
        let parent = this.parent(index);

        while(index > 0 && this.heap[index] > this.heap[parent]) {
            [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]];
            index = parent;
            parent = this.parent(index);
        }
    }

    remove = () => {
        let smallest = this.getMin();

        if(this.heap.length > 1) {

            this.heap[0] = this.heap[this.heap.length - 1];
            this.heap.splice(this.heap.length - 1);

            let index = 0;
            let left = this.leftChild(index);
            let right = this.rightChild(index);

            while(this.heap[left] !== undefined && 
                  this.heap[right] !== undefined && 
                  this.heap[left] >= this.heap[index] || 
                  this.heap[right] >= this.heap[index]) {
                
                if(this.heap[left] > this.heap[right]) {
                    [this.heap[left], this.heap[index]] = [this.heap[index], this.heap[left]];
                    index = left;
                } else {
                    [this.heap[right], this.heap[index]] = [this.heap[index], this.heap[right]];
                    index = right;
                }

                left = this.leftChild(index);
                right = this.rightChild(index);
            }

            if(this.heap[right] === undefined && this.heap[left] > this.heap[index]) {
                [this.heap[left], this.heap[index]] = [this.heap[index], this.heap[left]];
            }

        } else if(this.heap.length === 1) {
            this.heap.splice(0,1);
        } else {
            return null;
        }
        return smallest;
    }

    parent = (index) => {
        return Math.floor((index - 1) / 2);
    }

    leftChild = (index) => {
        return 2 * index + 1;
    }

    rightChild = (index) => {
        return 2 * index + 2;
    }

    getMin = () => {
        return this.heap[0];
    }
}