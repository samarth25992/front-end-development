let minHeap = function() {

    let heap = [null];

    let insert = function(num) {
        heap.push(num);

        if(heap.length > 2) {

            let index = heap.length - 1;
            while(index > 1 && heap[index] < heap[Math.floor(index/2)]) {
                [heap[index],heap[Math.floor(index/2)]] = [heap[Math.floor(index/2)], heap[index]];
                index = Math.floor(index/2);
            }
        }
    }

    let remove = function() {
        let smallest = heap[1];

        if(heap.length > 2) {
            heap[1] = heap[heap.length - 1];
            heap.splice(heap.length - 1);
            if(heap.length === 3) {
                if(heap[1] > heap[2]){
                    [heap[1], heap[2]] = [heap[2], heap[1]];
                }
                return smallest;
            }

            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while(heap[left] && heap[right] && heap[i] >= heap[left] || heap[i] >= heap[right]) {
                if(heap[left] < heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i;
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1;
                }

                left = 2 * i;
                right = 2 * i + 1;
            }

            if(heap[right] === undefined && heap[left] <= heap[i]) {
                [heap[left], heap[i]] = [heap[i], heap[left]];
            }
        } else if(heap.length === 2) {
            heap.splice(1,1);
        } else {
            return null;
        }
        return smallest;
    }

    /*let nums = [3,2,1,5,6,4];
    let k = 2;
    let result = 0;
    nums.forEach(item => {
        insert(item);
    });

    while(k) {
        result = remove();
        k--;
    }

    console.log(result);*/
}