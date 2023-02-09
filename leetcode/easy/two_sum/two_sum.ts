
// Solution 1 brute force.
// Time complexity: O(n2)
// Space complexity: O(n2)

function twoSumVersionOne(nums: number[], target: number): number[] {
  const result: number[] = [];
  
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  
  return result;
}

// Solution 2 with hash map.
// Time complexity: O(n)
// Space complexity: O(n)

function twoSumVersionTwo(nums: number[], target: number): number[] {
  const hashMap = new Map();
  
  for (let i = 0; i < nums.length; i++) {
    const difference = target - nums[i];
    
    if (hashMap.has(difference)) {
      return [hashMap.get(difference), i]
    }
    
    hashMap.set(nums[i], i);
  }
  
  return [];
}

console.log(twoSumVersionOne([2, 7, 11, 15], 9));
console.log(twoSumVersionOne([3, 2, 4], 6));

console.log(twoSumVersionTwo([2, 7, 11, 15], 9));
console.log(twoSumVersionTwo([3, 2, 4], 6));
