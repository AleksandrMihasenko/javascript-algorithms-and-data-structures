
// Solution 1
// Time complexity: O(n)
// Space complexity: O(n)

function containsDuplicateVersionOne(nums: number[]): boolean {
  const setNums = new Set(nums);

  return setNums.size !== nums.length;
}

// Solution 2 with hash map
// Time complexity: O(n)
// Space complexity: O(n)

type DuplicatesHashMap = {
  [key: string]: number
};

function containsDuplicateVersionTwo(nums: number[]): boolean {
  const hashMap: DuplicatesHashMap = {};
  let result = false;

  for (const [_, value] of nums.entries()) {
    if (hashMap[value]) return true;

    hashMap[value] = value;
  }

  return result;
}

console.log(containsDuplicateVersionOne([1, 2, 3, 4, 5]));
console.log(containsDuplicateVersionOne([1, 2, 3, 4, 5, 1]));

console.log(containsDuplicateVersionTwo([1, 2, 3, 4, 5]));
console.log(containsDuplicateVersionTwo([1, 2, 3, 4, 5, 1]));
