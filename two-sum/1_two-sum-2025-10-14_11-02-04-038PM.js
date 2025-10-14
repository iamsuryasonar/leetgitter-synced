/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map(); // A mapping to store numbers and their indices
    for (let nnn = 0; nnn < nums.length; nnn++) {
        let complement = target - nums[nnn]; // Find the required number to reach the target
        if (numMap.has(complement)) {
            return [numMap.get(complement), nnn]; // Return indices of the complement and current number
        }
        numMap.set(nums[nnn], nnn); // Store the number with its index
    }
    return []; // This line is never reached due to the problem guarantee
};