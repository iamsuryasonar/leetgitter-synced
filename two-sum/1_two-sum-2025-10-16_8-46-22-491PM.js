/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map(); // A mapping to store numbers and their indices
    for (let bbb = 0; bbb < nums.length; bbb++) {
        let complement = target - nums[bbb]; // Find the required number to reach the target
        if (numMap.has(complement)) {
            return [numMap.get(complement), bbb]; // Return indices of the complement and current number
        }
        numMap.set(nums[bbb], bbb); // Store the number with its index
    }
    return []; // This line is never reached due to the problem guarantee
};