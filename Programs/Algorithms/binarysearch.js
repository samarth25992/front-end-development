let binarySearch = function(nums, ele) {

    let min = 0;
    let max = nums.length - 1;
    let mid = 0;
    while(min <= max) {

        mid = parseInt((min + max) / 2);
        if(ele === nums[mid]) {
            return mid;
        } else if(ele < nums[mid]) {
            max = mid - 1;
        } else if(ele > nums[mid]) {
            min = mid + 1;
        }
    }
    return - 1;
};

// let nums = [2, 5, 9, 10, 15, 23, 45];
// let ele = 90;
// let result = binarySearch(nums, ele);
// console.log(result);