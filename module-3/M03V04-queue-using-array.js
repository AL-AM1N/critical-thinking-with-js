//? Implement Queue using array

/**
 * !Note:
 * 1. It follows FIFO (First In First Out)
 * 2. there are three operations: Enqueue(), Dequeue() , peek()
 * 3. peek() means it will show the first element
 */

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print(){
    console.log("Start -> ",this.items.join(" -> "), " -> end");
  }
}


const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print();

queue.dequeue();
queue.print();