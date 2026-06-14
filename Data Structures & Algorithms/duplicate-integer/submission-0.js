class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const newNums = [...new Set([...nums])];
        return newNums.length !== nums.length; 
    }
}
