class Stack {
  constructor() {
    this.items = [];
  }

  // Adds an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Removes the top element from the stack and returns it
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Returns the top element of the stack without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // Returns true if the stack is empty, false otherwise
  isEmpty() {
    return this.items.length === 0;
  }

  // Returns the size of the stack
  size() {
    return this.items.length;
  }

  // Removes all elements from the stack
  clear() {
    this.items = [];
  }

  // Prints the elements of the stack
  print() {
    console.log(this.items.toString());
  }
}

// Example usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log("Stack elements:", stack.items);

console.log("Popped element:", stack.pop());

console.log("Top element:", stack.peek());

console.log("Is the stack empty?", stack.isEmpty());

console.log("Stack size:", stack.size());

stack.print();
