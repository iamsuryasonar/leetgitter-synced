/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map(); // A mapping to store numbers and their indices
    for (let iii = 0; iii < nums.length; iii++) {
        let complement = target - nums[iii]; // Find the required number to reach the target
        if (numMap.has(complement)) {
            return [numMap.get(complement), iii]; // Return indices of the complement and current number
        }
        numMap.set(nums[iii], iii); // Store the number with its index
    }
    return []; // This line is never reached due to the problem guarantee
};