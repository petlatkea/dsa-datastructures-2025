import Stack from "./stack.js";

function main() {
  // Create a new stack by calling the constructor:
  const stack = new Stack();

  // Add elements to the stack, in the "reverse" order, by pushing them:
  stack.push("O");
  stack.push("L");
  stack.push("L");
  stack.push("E");
  stack.push("H");

  // And retrieve them in the opposite order, by popping them:
  console.log("The stack contained:");
  console.log(stack.pop()); // will write out H
  console.log(stack.pop()); // will write out E
  console.log(stack.pop()); // will write out L
  console.log(stack.pop()); // will write out L
  console.log(stack.pop()); // will write out O

  // You can always check the size:
  if (stack.size() == 0) {
    console.log("Stack is empty");
  }
  stack.push("T");
  stack.push("A");
  stack.push("C");

  console.log(stack.size()); // writes that the stack has 3 elements

  // And you can "peek at" the next element to be popped, without removing it:
  console.log(stack.peek()); // will write C

  // And even access elements later in the stack, while leaving them there:
  console.log(stack.get(2)); // will write T

  console.log("The entire stack contains:");
  // You can use this to get the entire stack:
  for (let i = 0; i < stack.size(); i++) {
    console.log(stack.get(i));
  }

  if (stack.size() >= 3) {
    console.log("Stack is still full");
  }
}

main();
