
// Solution 1
// Time complexity: O(n * nlogn)
// Space complexity: O(n)

function topFrequantElementsVersionOne(nums: number[], k: number): number[] {
  const hashMap: { [key: string]: number } = {};
  const result: number[] = [];
  
  for (const value of nums) {
    hashMap[value] = hashMap[value] ? hashMap[value] + 1 : 1;
  }
  
  Object
    .entries(hashMap)
    .sort((a, b) => b[1] - a[1])
    .forEach(item => {
      if (result.length < k) result.push(Number(item[0]))
    })
  
  return result;
}

console.log(topFrequantElementsVersionOne([1 , 1, 1, 2, 2, 3], 2));
console.log(topFrequantElementsVersionOne([1], 1));
