
// Solution 1
// Time complexity: O(n)
// Space complexity: O(n)

function productOfArrayExceptSelfVersionOne(nums: number[]): number[] {
  const result: number[] = [];
  let prefix = 1;
  let postfix = 1;
  
  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }
  
  for (let i = nums.length - 2; i >= 0; i--) {
    postfix *= nums[i + 1];
    result[i] *= postfix;
  }
  
  return result;
}

console.log(productOfArrayExceptSelfVersionOne([1, 2, 3, 4]));
console.log(productOfArrayExceptSelfVersionOne([-1, 1, 0, -3, 3]));
