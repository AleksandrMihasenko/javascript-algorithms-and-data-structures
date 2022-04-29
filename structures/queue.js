import { LinkedList } from './linked-list/LinkedList.js';

//queue
class Queue {
  constructor() {
    this.linkedList = new LinkedList();
  }

  isEmpty() {
    return !this.linkedList.head;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.linkedList.head.value;
  }

  enqueue(value) {
    this.linkedList.append(value);
  }

  dequeue() {
    const removeHead = this.linkedList.deleteHead();

    return removeHead ? removeHead.value : null;
  }

  toArray() {
    return this.linkedList
      .toArray()
      .map((linkedListNode) => linkedListNode.value);
  }

  toString(callback) {
    return this.linkedList.toString(callback);
  }
}

const queue = new Queue();
queue.enqueue('1');
queue.enqueue('2');
console.log(queue);
queue.dequeue();
console.log(queue);
