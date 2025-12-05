import Queue from "./queue.js";

function main() {
  // Create a new queue by calling the constructor:
  const queue = new Queue();

  // Add elements to the queue, in the correct order, by enqueueing them:
  queue.enqueue("H");
  queue.enqueue("E");
  queue.enqueue("L");
  queue.enqueue("L");
  queue.enqueue("O");

  // And retrieve them in the same order, by dequeueing them:
  console.log("The queue was:");
  console.log(queue.dequeue()); // will write out H
  console.log(queue.dequeue()); // will write out E
  console.log(queue.dequeue()); // will write out L
  console.log(queue.dequeue()); // will write out L
  console.log(queue.dequeue()); // will write out O

  // You can always check the size:
  if (queue.size() == 0) {
    console.log("Queue is empty");
  }
  queue.enqueue("C");
  queue.enqueue("A");
  queue.enqueue("T");

  console.log(queue.size()); // writes that the queue has 3 elements

  // And you can "peek at" the next element to be dequeued, without removing it:
  console.log(queue.peek()); // will write C

  // And even access elements later in the queue, while leaving them there:
  console.log(queue.get(2)); // will write T

  console.log("The entire queue contains:");
  // You can use this to get the entire queue:
  for (let i = 0; i < queue.size(); i++) {
    console.log(queue.get(i));
  }

  if (queue.size() >= 3) {
    console.log("Queue is still full");
  }
}

main();
