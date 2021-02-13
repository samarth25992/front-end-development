/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  
    let min = 0;
    let max = numbers.length - 1;

    while(min < max) {
        
        let sum = numbers[min] + numbers[max];
        if(sum === target) {
            return [min + 1, max + 1];
        }

        if(sum > target) {
            max--;
        } else {
            min++;
        }
    }

    return -1;
};

//[2,7,11,15] and target is 9