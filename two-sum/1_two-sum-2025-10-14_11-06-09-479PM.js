/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map(); // A mapping to store numbers and their indices
    for (let ppp = 0; ppp < nums.length; ppp++) {
        let complement = target - nums[ppp]; // Find the required number to reach the target
        if (numMap.has(complement)) {
            return [numMap.get(complement), ppp]; // Return indices of the complement and current number
        }
        numMap.set(nums[ppp], ppp); // Store the number with its index
    }
    return []; // This line is never reached due to the problem guarantee
};