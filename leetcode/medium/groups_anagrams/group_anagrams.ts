
// Solution 1
// Time complexity: O(m * nlogn)
// Space complexity: O(n * k)

function groupAnagramsVersionOne(anagrams: string[]): string[][] {
  const hashMap = new Map<string, string[]>();
  
  anagrams.forEach(anagram => {
    const key = anagram.split('').sort().join('');
    
    hashMap.set(key, [ ...(hashMap.get(key) || []), anagram ]);
  });
  
  return [...hashMap.values()];
}

// Solution 2 with hashMap
// Time complexity: O(m * n)
// Space complexity: O(n * k)

function groupAnagramsVersionTwo(anagrams: string[]): string[][] {
  if (!anagrams.length) return [];
  
  const hashMap = new Map<string, string[]>();
  
  anagrams.forEach(anagram => {
    const hash = getHash(anagram);
    const values = hashMap.get(hash) || [];
    
    values.push(anagram);
    hashMap.set(hash, values);
  });
  
  return [...hashMap.values()];
}

function getHash(word: string) {
  const numberOfAlphabet = new Array(26).fill(0);
  
  for (const char of word) {
    const charCode = char.charCodeAt(0) - 'a'.charCodeAt(0);
    
    numberOfAlphabet[charCode]++;
  }
  
  return numberOfAlphabet.toString();
}

console.log(groupAnagramsVersionOne(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagramsVersionOne(["a", "b"]));
console.log(groupAnagramsVersionOne([""]));

console.log(groupAnagramsVersionTwo(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagramsVersionTwo(["a", "b"]));
console.log(groupAnagramsVersionTwo([""]));
