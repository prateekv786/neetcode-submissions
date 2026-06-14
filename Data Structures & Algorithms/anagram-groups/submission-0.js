class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};
        for(const str of strs) {
            const strArr = Array(26).fill(0);
            for(const c of str) {
                strArr[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            const key = strArr.join('#')
            if(!obj[key]) {
                obj[key] = []
            }
            obj[key].push(str)
        }
        return Object.values(obj);
    }
}
