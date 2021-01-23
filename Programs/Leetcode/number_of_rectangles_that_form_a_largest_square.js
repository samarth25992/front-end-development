/**
 * @param {number[][]} rectangles
 * @return {number}
 * 
 * @Problem - https://leetcode.com/contest/weekly-contest-224/problems/number-of-rectangles-that-can-form-the-largest-square/
 */
var countGoodRectangles = function(rectangles) {
    
    let map = new Map();

    for (let rectangle of rectangles) {

        let min = Math.min(rectangle[0], rectangle[1]);
        map.has(min) ? map.set(min, map.get(min) + 1) : map.set(min, 1);
    }

    return map.get(Array.from(map.keys()).sort((a, b) => b - a)[0]);
};