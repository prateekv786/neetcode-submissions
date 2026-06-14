class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        const charsMap = {};
        for(let i=0; i<s.length; i++) {
            charsMap[s[i]] = charsMap[s[i]] + 1 || 1;
        }
        for(let i=0; i<t.length; i++) {
            if(!charsMap[t[i]]) {
                return false
            }
            else {
                charsMap[t[i]]--;
            }
        }
        return true;
    }
}
