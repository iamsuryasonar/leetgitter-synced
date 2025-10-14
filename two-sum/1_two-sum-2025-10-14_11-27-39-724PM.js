/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map(); // A mapping to store numbers and their indices
    for (let lll = 0; lll < nums.length; lll++) {
        let complement = target - nums[lll]; // Find the required number to reach the target
        if (numMap.has(complement)) {
            return [numMap.get(complement), lll]; // Return indices of the complement and current number
        }
        numMap.set(nums[lll], lll); // Store the number with its index
    }
    return []; // This line is never reached due to the problem guarantee
};