import DoublyLinkedListNode from './DoublyLinkedListNode.js';

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // create head node
  prepend(value) {
    const newNode = new DoublyLinkedListNode(value, this.head);
    this.head = newNode;

    if (!this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    return this;
  }

  // create node and add it to tail
  append(value) {
    const newNode = new DoublyLinkedListNode(value);

    if (this.tail) {
      this.tail.next = newNode;
    }
    newNode.previous = this.tail;
    this.tail = newNode;

    if (!this.head) {
      this.head = newNode;
    }

    return this;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          this.head = deletedNode.next;

          if (this.head) {
            this.head.previous = null;
          }

          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          this.tail = deletedNode.previous;
          this.tail.next = null;
        } else {
          const previousNode = deletedNode.previous;
          const nextNode = deletedNode.next;

          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }
      currentNode = currentNode.next
    }

    return deletedNode;
  }

  // find node with value
  find(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode
      }

      currentNode = currentNode.next;
    }

    return null;
  }

  // delete tail node and return it
  deleteTail() {
    if (!this.tail) {
      return null;
    }

    const deletedTail = this.tail;

    if (this.tail.previous) {
      this.tail = this.tail.previous;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedTail;
  }

  // delete head node and return it
  deleteHead() {
    if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead;
  }

  // create nodes from array of values
  fromArray(values) {
    values.forEach((value) => this.append(value));

    return this;
  }

  // create array from nodes
  toArray() {
    const nodes = [];

    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes;
  }

  // create string from node's value
  toString(callback) {
    return this.toArray().map((node) => node.toStringValue(callback)).toString();
  }

  // reverse linked list
  reversr() {
    let currentNode = this.head;
    let prevNode = null;
    let nextNode = null;

    while (currentNode) {
      nextNode = currentNode.next;
      prevNode = currentNode.previous;

      currentNode.next = prevNode;
      currentNode.previous = nextNode;

      prevNode = currentNode;
    }

    this.tail = this.head;
    this.head = prevNode;

    return this;
  }
}

let list = new DoublyLinkedList();
list.prepend(1);
console.log(list);
list.append(2);
console.log(list);
console.log(list.find(2));
