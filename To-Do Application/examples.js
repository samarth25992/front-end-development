/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {

    let haystackMap = new Map();

    for(let i = 0; i < haystack.length; i++) {

        if(haystackMap.has(haystack[i])) {

            let index = haystackMap.get(haystack[i]).indices;
            index.push(i);

            let value = { iterator: 0, indices: index };
            haystackMap.set(haystack[i],value);
        }else {
            let value = { iterator: 0, indices: [i] };
            haystackMap.set(haystack[i],value);
        }
    }

    let checkStr = function() {
      let firstCharIndices;

      if(haystackMap.get(needle[0]) == undefined) {
        return -1;
      }
      firstCharIndices = haystackMap.get(needle[0]).indices;
      outer : for(let i = 0; i < firstCharIndices.length; i++) {

        let index = firstCharIndices[i];
        for(let j = 1; j < needle.length; j++) {

          if(haystackMap.has(needle[j]) === false) {
            return -1;
          }
          if(haystackMap.get(needle[j]).indices.includes(++index) == false) {
            continue outer;
          }

        }
        return firstCharIndices[i];
      }
      return -1;
    }

    if(haystack.length == 0 && needle.length == 0) {
      return 0;
    }else if(haystack.length == 0) {
      return -1;
    }else if(needle.length == 0){
      return 0;
    }else if(needle.length > haystack.length) {
      return -1;
    }
    let index = checkStr();
    console.log(index);
    return index;
};
