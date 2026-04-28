//? Implement stack using array

/**
 * !Note:
 * 1. It follows LIFO (Last In First Out)
 * 2. there are three operations: push(), pop() , peek()
 * 3. peek() means it will show the top or last element
 */

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print(){
    console.log(this.items);
  }
}


const stack = new Stack();

console.log(stack.pop());
console.log(stack.isEmpty());


stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);

console.log(stack.peek());
stack.print();

stack.pop();
console.log(stack.pop());


stack.print();
console.log(stack.peek());