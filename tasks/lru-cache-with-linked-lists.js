// get(key), put(key, value)
// | {2, '1'} | {3, '1'} | {4, '1'} | - put
// limited capacity (10 items)

class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(node) {
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
  }

  shift() {
    const head = this.head;
    this.splice(this.head);
    return head;
  }

  splice(node) {
    // one node in list
    if (!node.prev && !node.next) {
      this.head = null;
      this.tail = null;
      // node is first item
    } else if (!node.prev) {
      this.head = node.next;
      this.head.prev = null;
      // node is last item
    } else if (!node.next) {
      this.tail = node.prev;
      this.tail.next = null;
      // ...middle
    } else {
      const next = node.next;
      const prev = node.prev;
      prev.next = next;
      next.prev = prev;
      node.next = null;
      node.prev = null;
    }
    this.length--;
  }
}

// without optimisation and without linked-list
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.queue = new LinkedList();
    this.map = {};
  }

  get(key) {
    if (!this.map[key]) {
      return -1;
    }

    const value = this.map[key].value;
    this.put(key, value);
    return value;
  }

  put(key, value) {
    if (this.map[key]) {
      this.queue.splice(this.map[key]);
      this.map[key] = null;
    }

    const node = new ListNode(key, value);
    this.queue.push(node);
    this.map[key] = node;

    if (this.queue.length > this.capacity) {
      this.map[this.queue.shift().key] = null;
    }
  }
}

const cache = new LRUCache(3);
cache.put(1, 1);
cache.put(2, 1);
cache.get(2);
cache.put(3, 1);
cache.put(4, 1);
console.log(cache.queue);
