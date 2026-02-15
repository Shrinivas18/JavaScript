/*
Problem: Implement an LRU Cache

Design a data structure that follows the Least Recently Used (LRU) caching strategy.

Requirements

Implement a class:

class LRUCache {
  constructor(capacity)
  get(key)
  put(key, value)
}

* Behavior
  - LRUCache(int capacity)
    - Initialize cache with positive size capacity.
  - get(key)
    - Return the value if key exists.
    - Otherwise return -1.
    - Accessing a key makes it most recently used.
  - put(key, value)
    - Insert or update value.
    - If capacity exceeded → remove least recently used item.
    - Updating an existing key makes it most recently used.

* Example
const cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1

⚡ Required Time Complexity
get → O(1)
put → O(1)

💡 How to Achieve O(1)?
We combine:
1. HashMap (Map) → O(1) key lookup
2. Doubly Linked List → O(1) insert & delete

Why Doubly Linked List?
1. We need to remove nodes from middle in O(1)
2. We track order of usage:
  - Head → Most Recently Used
  - Tail → Least Recently Used
*/

class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();

    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  insert(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const node = this.cache.get(key);

    this.remove(node);
    this.insert(node);

    return node.value;
  }

  put(key, value) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.value = value;

      this.remove(node);
      this.insert(node);
    } else {
      if (this.cache.size === this.capacity) {
        const lru = this.tail.prev;
        this.remove(lru);
        this.cache.delete(lru.key);
      }

      const newNode = new Node(key, value);
      this.insert(newNode);
      this.cache.set(key, newNode);
    }
  }
}
