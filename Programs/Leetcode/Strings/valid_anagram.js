/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false;
    }

    let map1 = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map1.has(s[i])) {
            map1.set(s[i], map1.get(s[i]) + 1)
        } else {
            map1.set(s[i], 1);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!map1.has(t[i])) {
            return false;
        }

        map1.set(t[i], map1.get(t[i]) - 1);
    }

    if (Array.from(map1.values()).filter(num => num !== 0).length !== 0) {
        return false;
    } else {
        return true;
    }
};