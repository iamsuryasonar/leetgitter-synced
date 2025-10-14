/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = new Map(); // A mapping to store numbers and their indices
    for (let ooo = 0; ooo < nums.length; ooo++) {
        let complement = target - nums[ooo]; // Find the required number to reach the target
        if (numMap.has(complement)) {
            return [numMap.get(complement), ooo]; // Return indices of the complement and current number
        }
        numMap.set(nums[ooo], ooo); // Store the number with its index
    }
    return []; // This line is never reached due to the problem guarantee
};