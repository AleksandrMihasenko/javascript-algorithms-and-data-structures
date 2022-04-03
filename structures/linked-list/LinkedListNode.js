export default class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toStringValue(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}
