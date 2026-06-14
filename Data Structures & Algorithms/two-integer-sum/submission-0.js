class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();
        for(let i=0; i<nums.length; i++) {
            const num = nums[i];
            const complement = target - num;
            const subIndex = numsMap.get(complement);
            const isTarget = numsMap.has(complement);
            if(isTarget) {
                return [subIndex, i];
            }
            numsMap.set(num, i);
        }
        return [-1, -1];
    }
}
