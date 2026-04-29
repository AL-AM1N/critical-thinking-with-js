//? Linked List Implementation - remove()

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    // if the linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }

    // if the linked list is not empty
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    // if the linked list is empty
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }

    // if the linked list is not empty
    else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
  }

  insert(index, value) {
    // if the insert is in the start of the linked list
    if (index === 0) {
      return this.prepend(value);
    }

    // if the insert is in the end of the list
    if (index === this.length) {
      return this.append(value);
    }

    // if the insert is in the middle
    // find the leadin node
    const leadinNode = this._traverseToIndex(index - 1);
    //console.log(leadinNode);
    const holdingNode = leadinNode.next;

    const newNode = new Node(value);
    leadinNode.next = newNode;
    newNode.next = holdingNode;

    this.length++;
  }

  remove(index) {
    // if the removing index is the first element
    if (index === 0) {
        const removedItem = this.head.value;
      this.head = this.head.next;

      if (this.length === 1) {
        this.tail = null;
      }

      return removedItem;
    }

    // if the index is in the middle of the list
    const leadingNode = this._traverseToIndex(index - 1);

    const nodeToRemove = leadingNode.next;

    const afterNode = nodeToRemove.next;

    leadingNode.next = afterNode;

    // if the index is the last element or item
    if (leadingNode.next === null) {
      this.tail = leadingNode;
    }
  }

  // helper method
  _traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;

    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  print() {
    let currentNode = this.head;
    const arr = [];

    console.log("This is current Node", currentNode);

    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr.join(" -> "), "-> null");
  }
}

const linkedList = new LinkedList();

linkedList.append(0);
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.remove(2);
linkedList.remove(2);
linkedList.remove(0);
linkedList.remove(0);

linkedList.print(); // output: null
