let maxHeap = function() {

    let heap = [null];

    let insert = function(num) {
        heap.push(num);
        let index = heap.length - 1;
        if(heap.length > 2) {
            while(index > 1 && heap[index] > heap[Math.floor(index/2)]) {
                [heap[index], heap[Math.floor(index/2)]] = [heap[Math.floor(index/2)], heap[index]];
                index = Math.floor(index/2);
            }
        }
    }

    let remove = function() {

        let largest = heap[1];

        if(heap.length > 2) {

            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            if(heap.length === 3) {
                if(heap[2] > heap[1]) {
                    [heap[2], heap[1]] = [heap[1], heap[2]];
                }
                return largest;
            }

            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;

            while(heap[left] && heap[right] && heap[left] >= heap[i] || heap[right] >= heap[i]) {
                if(heap[left] > heap[right]) {
                    [heap[left], heap[i]] = [heap[i], heap[left]];
                    i = left;
                } else {
                    [heap[right], heap[i]] = [heap[i], heap[right]];
                    i = right;
                }

                left = 2 * i;
                right = 2 * i + 1;
            }

            if(heap[right] === undefined && heap[left] >= heap[i]) {
                [heap[left], heap[i]] = [heap[i], heap[left]];
            }

        } else if(heap.length === 2) {
            heap.splice(1,1);
        } else {
            return null;
        }
        return largest;
    }

    let nums = [5,2,4,1,3,6,0];
    let k = 4;
    let result = 0;
    nums.forEach(item => {
        insert(item);
    });
    
    while(k) {
        result = remove();
        k--;
    }

    console.log(result);
}