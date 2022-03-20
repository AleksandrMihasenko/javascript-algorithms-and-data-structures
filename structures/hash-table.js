//hash-table, dictionary, map
//variant 1
class HashTable {
  store = new Array(10);

  hash(key) {
    let sum = 0;

    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum;
  }

  //O(1)
  add(key, value) {
    this.store[this.hash(key)] = this.store[this.hash(key)] || [];
    this.store[this.hash(key)].push({ key, value });
  }

  //O(m * 1)
  get(key) {
    return this.store[this.hash(key)].find((item) => item.key === key).value;
  }
}

const dict = new HashTable();
dict.add('ab', '1');
dict.add('ba', '2');
console.log(dict.get('ab'), '--', dict.get('ba'));

//variant 2 in javascript
const dict2 = new Map();
dict2.set('ab', '1');
dict2.set('ba', '2');
console.log(dict.get('ab'), '--', dict.get('ba'));
