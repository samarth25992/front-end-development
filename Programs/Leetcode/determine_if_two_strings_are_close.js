/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 * 
 * @Problem - https://leetcode.com/explore/challenge/card/january-leetcoding-challenge-2021/582/week-4-january-22nd-january-28th/3613/
 */
var closeStrings = function(word1, word2) {
    
    if(word1.length !== word2.length) {
        return false;
    }

    let map1 = new Map();
    let map2 = new Map();
    let string1 = word1.split('');
    let string2 = word2.split('');

    for (let char of string1) {
        map1.get(char) ? map1.set(char, map1.get(char) + 1) : map1.set(char, 1);
    }
    
    for (let char of string2) {
        map2.get(char) ? map2.set(char, map2.get(char) + 1) : map2.set(char, 1);
    }

    for (let char of string2) {
        if(!map1.get(char)) {
            return false;
        }
    }
    let values1 = Array.from(map1.values()).sort((a, b) => a - b);
    let keys1 = Array.from(map1.keys()).sort();

    let values2 = Array.from(map2.values()).sort((a, b) => a - b);
    let keys2 = Array.from(map2.keys()).sort();

    if(JSON.stringify(values1) === JSON.stringify(values2) && JSON.stringify(keys1) === JSON.stringify(keys2)) {
        return true;
    } else {
        return false;
    }
};

//closeStrings("cabbba", "abbccc");