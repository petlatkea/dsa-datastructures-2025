import assert from "assert";
import Queue from "./queue.js";

describe("Queue", function () {
  let queue;

  beforeEach(function () {
    // Initialize a new Queue before each test
    queue = new Queue();
  });

  describe("Constructor and initial state", function () {
    it("should initialize an empty queue", function () {
      assert.equal(queue.size(), 0);
    });
    it("should have head pointing to null when empty", function () {
      assert.equal(queue.head, null);
    });
    it("should have tail pointing to null when empty", function () {
      assert.equal(queue.tail, null);
    });
  });

  describe("#enqueue()", function () {
    it("should add a single element to the queue", function () {
      queue.enqueue("A");
      assert.equal(queue.size(), 1);
    });
    it("should add multiple elements to the queue", function () {
      queue.enqueue("A");
      queue.enqueue("B");
      queue.enqueue("C");
      assert.equal(queue.size(), 3);
    });
    it("should set head to first enqueued element", function () {
      queue.enqueue("A");
      assert.equal(queue.head.data, "A");
    });
    it("should set tail to last enqueued element", function () {
      queue.enqueue("A");
      queue.enqueue("B");
      queue.enqueue("C");
      assert.equal(queue.tail.data, "C");
    });
  });

  describe("#dequeue()", function () {
    it("should remove and return the front element", function () {
      queue.enqueue("A");
      queue.enqueue("B");
      queue.enqueue("C");
      const result = queue.dequeue();
      assert.equal(result, "A");
      assert.equal(queue.size(), 2);
    });
    it("should maintain FIFO order", function () {
      queue.enqueue("A");
      queue.enqueue("B");
      queue.enqueue("C");
      assert.equal(queue.dequeue(), "A");
      assert.equal(queue.dequeue(), "B");
      assert.equal(queue.dequeue(), "C");
    });
    it("should update head after dequeue", function () {
      queue.enqueue("A");
      queue.enqueue("B");
      queue.enqueue("C");
      queue.dequeue();
      assert.equal(queue.head.data, "B");
    });
    it("should set head to null when queue becomes empty", function () {
      queue.enqueue("A");
      queue.dequeue();
      assert.equal(queue.head, null);
    });
  });

  describe("#size()", function () {
    it("should return 0 for an empty queue", function () {
      assert.equal(queue.size(), 0);
    });
    it("should return correct size after enqueue", function () {
      queue.enqueue("A");
      assert.equal(queue.size(), 1);
      queue.enqueue("B");
      assert.equal(queue.size(), 2);
    });
    it("should return correct size after dequeue", function () {
      queue.enqueue("A");
      queue.enqueue("B");
      queue.enqueue("C");
      queue.dequeue();
      assert.equal(queue.size(), 2);
    });
  });

  describe("#peek()", function () {
    it("should return the front element without removing it", function () {
      queue.enqueue("A");
      queue.enqueue("B");
      const result = queue.peek();
      assert.equal(result, "A");
      assert.equal(queue.size(), 2);
    });
    it("should return the same element multiple times", function () {
      queue.enqueue("A");
      queue.enqueue("B");
      assert.equal(queue.peek(), "A");
      assert.equal(queue.peek(), "A");
      assert.equal(queue.peek(), "A");
    });
  });

  describe("#get()", function () {
    it("should return element at index 0", function () {
      queue.enqueue("A");
      queue.enqueue("B");
      queue.enqueue("C");
      assert.equal(queue.get(0), "A");
    });
    it("should return element at middle index", function () {
      queue.enqueue("A");
      queue.enqueue("B");
      queue.enqueue("C");
      assert.equal(queue.get(1), "B");
    });
    it("should return element at last index", function () {
      queue.enqueue("A");
      queue.enqueue("B");
      queue.enqueue("C");
      assert.equal(queue.get(2), "C");
    });
    it("should not remove the element", function () {
      queue.enqueue("A");
      queue.enqueue("B");
      queue.enqueue("C");
      queue.get(1);
      assert.equal(queue.size(), 3);
    });
  });

});
