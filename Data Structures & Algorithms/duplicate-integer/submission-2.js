class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(!nums.length) return false;
        const seen = new Set();
        for(const item of nums) {
            if(seen.has(item)) {
                return true;
            }
            seen.add(item)
        }
        return false;
    }
}
