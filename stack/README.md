# Stack

A **Stack** is a very simple data structure that only allows adding and removing elements to one end of a list - well, *stack*. Making it grow every time an element is added, and shrink again as they are removed.

Opposed to a [Queue](/queue/) the stack always returns elements in the opposite order of how they were added - the first element added will be the last element removed!

This version is implemented with a (singly) linked list, allowing it to grow indefinetely.

## Usage

*Note: All these examples are supposed to be combined into one program in the order shown to give the suggested results.*

Create a new stack by calling the constructor:

```js
  const stack = new Stack();
``` 

And retrieve them in the opposite order, by popping them:

```js
  console.log("The stack contained:");
  console.log(stack.pop()); // will write out H
  console.log(stack.pop()); // will write out E
  console.log(stack.pop()); // will write out L
  console.log(stack.pop()); // will write out L
  console.log(stack.pop()); // will write out O
``` 

You can always check the size:

```js
  if (stack.size() == 0) {
    console.log("Stack is empty");
  }
  stack.push("T");
  stack.push("A");
  stack.push("C");

  console.log(stack.size()); // writes that the stack has 3 elements
``` 

And you can "peek at" the next element to be popped, without removing it:

```js
  console.log(stack.peek()); // will write C
``` 

And even access elements later in the stack, while leaving them there:

```js
  console.log(stack.get(2)); // will write T
``` 

You can use this to get the entire stack:

```js
  for (let i = 0; i < stack.size(); i++) {
    console.log(stack.get(i));
  }
``` 

## Reference

The stack is implemented as a class called `Stack`, that can be imported by other modules.

The class is built of nodes - each **node** is an object that links to another **node** and to a **data** object. Unlike the [Singly Linked List](/singlylinkedlist/) those nodes aren't exposed to the user, but always kept hidden inside the class.

* Properties  
  The class contains a single property, accessible from the outside:
  - `head` - which refers to the top element in the stack, or `null` if the stack is empty.
* Constructor
  - `new Stack()` - doesn't receive anything, just initializes an empty stack.
* Methods
  - `push( data )` - adds a new node, with reference to the data object, on top of the stack
  - `pop()` - removes the node at the top of the stack and returns the referenced data object
  - `peek()` - returns the data object at the top of the stack without removing it
  - `size()` - tells how many elements are in the stack
  - `get( index )` - finds and returns the element in position 'index', using 0 for the top, 1 for the element just below the top, and so on.    
  The element stays in the stack.

## Test

Run the tests defined in `test.js` with mocha, by writing
```bash
  npx mocha
```
when in the current folder (`stack`)