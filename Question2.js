/*
  Question 2

  Write a function that, when provided the first node of a singly linked list, will sort the list by its values from smallest to largest. Do not use any built-in language sorting methods (e.g. sort in ruby)

  Your answer will be judged on both readability and its performance in the worst-case scenario in Big O time.

  You can use any language and must define your own node class.
*/
class Node {
  constructor(val) {
    this.data = val
    this.next = null
  }
}

function sortList(head) {
  // Utility Function
  const merge = (l1, l2) => {
    const head = new Node()
    let current = head

    while (l1 !== null && l2 !== null) {
      if (l1.val < l2.val) {
        current.next = l1
        l1 = l1.next
      } else {
        current.next = l2
        l2 = l2.next
      }

      current = current.next
    }

    current.next = l1 === null ? l2 : l1

    return head.next
  }

  if (head === null || head.next === null) {
    return head
  }

  let prev = null
  let slow = head
  let fast = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    prev = slow
    slow = slow.next
  }

  prev.next = null

  const l1 = sortList(head)
  const l2 = sortList(slow)

  return merge(l1, l2)
}
