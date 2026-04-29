//? Linked List Implementation - insert()

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
linkedList.append(3);

linkedList.insert(2, 200); // index= 2  and value = 200


linkedList.print(); // output: 0 -> 1 -> 200 -> 3 -> null
