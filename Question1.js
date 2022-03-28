/*
  Question #1

  Write a function that takes two arguments. The first node from a singly linked list as the first argument and any node in the list as a second argument.  The function should delete the second argument (node) from the list.

  Your answer will be judged on both readability and its performance in the worst-case scenario in Big O time.

  You can use any language and must define your own node class.
*/

class Node {
  constructor(val) {
    this.data = val
    this.next = null
  }
}

function deleteNode(firstNode, nodeToDelete) {
  if (nodeToDelete === firstNode) {
    if (nodeToDelete.next === null) {
      console.log('ERROR: Attempting to delete first and only node.')
      return
    }

    nodeToDelete.data = nodeToDelete.next.data

    firstNode = nodeToDelete.next

    nodeToDelete.next = nodeToDelete.next.next

    return
  }

  let previousNode = nodeToDelete

  while (previousNode.next !== null && previousNode.next !== firstNode) {
    previousNode = previousNode.next
  }

  if (previousNode.next === null) {
    console.log("Node doesn't exist.")
    return
  }

  previousNode.next = previousNode.next.next

  return
}
