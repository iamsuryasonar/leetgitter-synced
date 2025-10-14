/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map(); // A mapping to store numbers and their indices
    for (let jjj = 0; jjj < nums.length; jjj++) {
        let complement = target - nums[jjj]; // Find the required number to reach the target
        if (numMap.has(complement)) {
            return [numMap.get(complement), jjj]; // Return indices of the complement and current number
        }
        numMap.set(nums[jjj], jjj); // Store the number with its index
    }
    return []; // This line is never reached due to the problem guarantee
};