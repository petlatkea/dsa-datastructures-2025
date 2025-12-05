# Queue

A **Queue** is a very simple data structure that only allows adding elements to one end of a list - well, *queue* - and subsequently removing them from the other end.

This one is implemented with a (singly) linked list, allowing it to grow indefinetely.

# Usage

*Note: All these examples are supposed to be combined into one program in the order shown to give the suggested results.*

Create a new queue by calling the constructor:

```js
  const queue = new Queue();
``` 

Add elements to the queue, in the correct order, by enqueueing them:

```js
  queue.enqueue("H");
  queue.enqueue("E");
  queue.enqueue("L");
  queue.enqueue("L");
  queue.enqueue("O");
``` 

And retrieve them in the opposite order, by dequeueing them:

```js
  console.log( queue.dequeue() ); // will write out O
  console.log( queue.dequeue() ); // will write out L
  console.log( queue.dequeue() ); // will write out L
  console.log( queue.dequeue() ); // will write out E
  console.log( queue.dequeue() ); // will write out H
``` 

You can always check the size:

```js
  if( queue.size() == 0 ) {
    console.log("Queue is empty");
  }
  queue.enqueue("C");
  queue.enqueue("A");
  queue.enqueue("T");

  console.log( queue.size() ); // writes that the queue has 3 elements
``` 

And you can "peek at" the next element to be dequeued, without removing it:

```js
  console.log( queue.peek() ); // will write T
``` 

And even access elements later in the queue, while leaving them there:

```js
  console.log( queue.get(2) ); // will write C
``` 

You can use this to get the entire queue:

```js
  for (let i=0; i < queue.size(); i++) {
    console.log(queue.get(i));
  }
``` 


# Reference

The queue is implemented as a class called `Queue`, that can be imported by other modules.

The queue is built of nodes - each **node** is an object that links to another **node** *and* to a **data** object. Unlike the [Singly Linked List](/singlylinkedlist/) the nodes aren't exposed to the user, but kept hidden inside the class.

* Properties  
  The class contains two properties, that are accessible from the outside:
  - `head` - which refers to the frontmost element  in the queue, or `null` if the queue is empty
  - `tail` - which refers to the last element in the back of the queue, or `null` if the queue is empty.
* Constructor
  * `new Queue()` - doesn't receive anything, just initializes an empty queue.
* Methods
  - `enqueue( data )` - adds a new node, with reference to the `data` object, to the back of the queue
  - `dequeue()` - removes the node at the front of the queue and returns the referenced `data` object
  - `size()` - tells how many elements are in the queue
  - `peek()` - returns the data object at the front of the queue without removing it
  - `get( index )` - finds and returns the element in position `index`, where 0 is the frontmost, without removing anything

# Test
