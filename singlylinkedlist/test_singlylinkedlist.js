import SinglyLinkedList from "./singlylinkedlist.js";

function main() {
  const list = new SinglyLinkedList();
  console.log(list);
  list.printList();

  // Add elements to the list as many times as you want:
  list.add("C");
  list.add("A");
  list.add("T");

  // Retrieve the elements with either of the get-methods:
  console.log(list.getFirst());   // will return "C"
  console.log(list.get(1));       // will return "A"
  console.log(list.getLast());    // will return "T"
    
  // Modify the data at a certain position
  list.set(2, "R"); // changes the list from C->A->T to C->A->R
  list.printList();

  /* Because the list is dynamic, you can also insert additional elements 
    in between others - the index given is the place where the new element 
    should be inserted, whatever was at that index, is shifted "up" the list, 
    as is everything following it. */
  list.insert(2, "E"); // changes the list to C->A->E->R
  list.printList();
  list.insert(3, "S"); // changes it further to C->A->E->S->R
  list.printList();

  // You can also remove the first, the last, or any index of the list
  list.removeLast(); // changes the list to C->A->E->S
  list.remove(2);    // removes the element at index 2
                     // changing the list to C->A->S
  list.printList();

  // You can see the current number of elements with `size`
  console.log( list.size() ); // the list contains '3' elements

  // Everything can be removed at once with the `clear` method:
  list.clear();     // empties the list completely

  list.printList();

  // ***********************************************
  // * internals
  // ***********************************************

  list.add("C");
  list.add("A");
  list.add("T");

  list.printList();

  // You can get a node, just like getting data:
  console.log(list.getFirstNode()); // returns the node { data: "C", next: node with A }
  console.log(list.getNode(1));     // returns the node { data: "A", next: node with T }
  console.log(list.getLastNode());  // returns the node { data: "T", next: null }

  // And when you have a node, you can get those around it:
  const node = list.getNode(1); // sets node to the one with { data: "A", next: node with T }
  console.log(list.getNextNode(node));     // returns the node { data: "T", next: null }
  console.log(list.getPreviousNode(node)); // returns the node { data: "C", next: node }

  // You can also insert new data next to an existing node
  list.insertBefore(node, "R") // changes the list to C->R->A->T
  list.insertAfter(node, "E") // changes the list to C->R->A->E->T
  list.printList();

  // And you can remove an existing node
  list.removeNode(list.getNextNode(node));
  list.removeNode(node) // changes the list to C->R->T
  list.printList();

  // You can of course use the `getNode` methods as input to the other methods, like e.g.
  const anode = list.getLastNode();
  list.insertBefore(anode, "U");  // changes the list to C->R->U->T
  list.insertAfter(list.getFirstNode(), "E") // changes the list to C->E->R->U->T
  list.printList();

}

main();