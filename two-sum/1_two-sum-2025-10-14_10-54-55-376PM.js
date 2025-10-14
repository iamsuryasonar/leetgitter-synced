/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map(); // A mapping to store numbers and their indices
    for (let kkk = 0; kkk < nums.length; kkk++) {
        let complement = target - nums[kkk]; // Find the required number to reach the target
        if (numMap.has(complement)) {
            return [numMap.get(complement), kkk]; // Return indices of the complement and current number
        }
        numMap.set(nums[kkk], kkk); // Store the number with its index
    }
    return []; // This line is never reached due to the problem guarantee
};