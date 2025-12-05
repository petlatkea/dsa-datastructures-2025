import assert from "assert";
import Stack from "./stack.js";

describe("Stack", function () {
  let stack;

  beforeEach(function () {
    // Initialize a new Stack before each test
    stack = new Stack();
  });

  describe("Constructor and initial state", function () {
    it("should initialize an empty stack", function () {
      assert.equal(stack.size(), 0);
    });
    it("should have head pointing to null when empty", function () {
      assert.equal(stack.head, null);
    });
  });

  describe("#push()", function () {
    it("should add a single element to the stack", function () {
      stack.push("A");
      assert.equal(stack.size(), 1);
    });
    it("should add multiple elements to the stack", function () {
      stack.push("A");
      stack.push("B");
      stack.push("C");
      assert.equal(stack.size(), 3);
    });
    it("should set head to the pushed element", function () {
      stack.push("A");
      assert.equal(stack.head.data, "A");
    });
    it("should update head to the most recently pushed element", function () {
      stack.push("A");
      stack.push("B");
      stack.push("C");
      assert.equal(stack.head.data, "C");
    });
  });

  describe("#pop()", function () {
    it("should remove and return the top element", function () {
      stack.push("A");
      stack.push("B");
      stack.push("C");
      const result = stack.pop();
      assert.equal(result, "C");
      assert.equal(stack.size(), 2);
    });
    it("should maintain LIFO order", function () {
      stack.push("A");
      stack.push("B");
      stack.push("C");
      assert.equal(stack.pop(), "C");
      assert.equal(stack.pop(), "B");
      assert.equal(stack.pop(), "A");
    });
    it("should update head after pop", function () {
      stack.push("A");
      stack.push("B");
      stack.push("C");
      stack.pop();
      assert.equal(stack.head.data, "B");
    });
    it("should set head to null when stack becomes empty", function () {
      stack.push("A");
      stack.pop();
      assert.equal(stack.head, null);
    });
  });

  describe("#size()", function () {
    it("should return 0 for an empty stack", function () {
      assert.equal(stack.size(), 0);
    });
    it("should return correct size after push", function () {
      stack.push("A");
      assert.equal(stack.size(), 1);
      stack.push("B");
      assert.equal(stack.size(), 2);
    });
    it("should return correct size after pop", function () {
      stack.push("A");
      stack.push("B");
      stack.push("C");
      stack.pop();
      assert.equal(stack.size(), 2);
    });
  });

  describe("#peek()", function () {
    it("should return the top element without removing it", function () {
      stack.push("A");
      stack.push("B");
      const result = stack.peek();
      assert.equal(result, "B");
      assert.equal(stack.size(), 2);
    });
    it("should return the same element multiple times", function () {
      stack.push("A");
      stack.push("B");
      assert.equal(stack.peek(), "B");
      assert.equal(stack.peek(), "B");
      assert.equal(stack.peek(), "B");
    });
  });

  describe("#get()", function () {
    it("should return element at index 0 (top)", function () {
      stack.push("A");
      stack.push("B");
      stack.push("C");
      assert.equal(stack.get(0), "C");
    });
    it("should return element at index 1 (below top)", function () {
      stack.push("A");
      stack.push("B");
      stack.push("C");
      assert.equal(stack.get(1), "B");
    });
    it("should return element at index 2 (bottom)", function () {
      stack.push("A");
      stack.push("B");
      stack.push("C");
      assert.equal(stack.get(2), "A");
    });
    it("should not remove the element", function () {
      stack.push("A");
      stack.push("B");
      stack.push("C");
      stack.get(1);
      assert.equal(stack.size(), 3);
    });
  });

});