
// Solution 1 with hash map
// Time complexity: O(s + t)
// Space complexity: O(s + t)

type AnagramHashMap = {
  [key: string]: number
}
function validAnagramVersionOne(s: string, t: string) {
  if (s.length !== t.length) return false;

  const hashMapOne: AnagramHashMap = {};
  const hashMapTwo: AnagramHashMap = {};

  for (const [key, _] of s.split('').entries()) {
    hashMapOne[s[key]] = hashMapOne[s[key]] ? hashMapOne[s[key]] + 1 : 1;
    hashMapTwo[t[key]] = hashMapTwo[t[key]] ? hashMapTwo[t[key]] + 1 : 1;
  }

  for (const elem in hashMapOne) {
    return hashMapOne[elem] === hashMapTwo[elem];
  }
}

// Solution 2 with sorting. Time complexity depends on sort algorithm and its space complexity.
// Time complexity: O(n * logn)
// Space complexity: O(1)

function validAnagramVersionTwo(s: string, t: string) {
  return s.split('').sort().join('') === t.split('').sort().join('');
}

console.log(validAnagramVersionOne('anagram', 'nagaram'));
console.log(validAnagramVersionOne('cat', 'rat'));

console.log(validAnagramVersionTwo('anagram', 'nagaram'));
console.log(validAnagramVersionTwo('cat', 'rat'));
