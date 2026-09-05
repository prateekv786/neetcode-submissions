class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const str = s.toLowerCase().replace(/[\W_]/g, "");
        let left = 0;
        let right = str.length - 1;
        while(left <= right) {
            if(str[left] !== str[right]) {
               return false 
            }
            left++;
            right--;
        }
        return true;
    }
}
