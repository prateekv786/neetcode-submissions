class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const map = new Map();
        for(const str of s) {
            map.set(str, (map.get(str) || 0) + 1)
        }

        for(const str of t) {
            if(!map.has(str)) return false
            map.set(str, map.get(str) - 1)
            if(map.get(str) < 0) return false;
        }
        return true;
    }
}
