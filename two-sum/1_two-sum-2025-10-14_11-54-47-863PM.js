/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map(); // A mapping to store numbers and their indices
    for (let mmm = 0; mmm < nums.length; mmm++) {
        let complement = target - nums[mmm]; // Find the required number to reach the target
        if (numMap.has(complement)) {
            return [numMap.get(complement), mmm]; // Return indices of the complement and current number
        }
        numMap.set(nums[mmm], mmm); // Store the number with its index
    }
    return []; // This line is never reached due to the problem guarantee
};