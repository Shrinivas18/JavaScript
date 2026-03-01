/*
Trie Implementation (Prefix Tree)

🧩 Problem Statement
Design and implement a Trie (Prefix Tree) with the following operations:
1. insert(word) – Inserts a word into the trie.
2. search(word) – Returns true if the word exists in the trie.
3. startsWith(prefix) – Returns true if there is any word in the trie that starts with the given prefix.

💡 Concepts Involved
- Tree Data Structure
- Prefix-based searching
- Efficient string storage
- Character-by-character traversal

🌳 What is a Trie?

A Trie is a tree-like data structure used to efficiently store and retrieve strings, especially when dealing with prefixes.

Each node:
- Stores children (characters)
- Marks whether it represents the end of a word

Example for words: "cat" and "car"

      root
       |
       c
       |
       a
      / \
     t   r

🚀 Approach
Each Node Should Contain:
- children → Object (or Map) to store next characters
- isEndOfWord → Boolean flag

Operations Logic
1️⃣ Insert
- Start from root
- For each character:
  - If not present, create a new node
  - Move to that node
- Mark last node as end of word

2️⃣ Search
- Traverse character by character
- If any character missing → return false
- After traversal → check isEndOfWord

3️⃣ startsWith
- Traverse using prefix
- If traversal completes → return true
*/

class TrieNode {
    constructor() {
        this.children = {};     // Stores character -> TrieNode
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.children[char]) {
                current.children[char] = new TrieNode();
            }
            current = current.children[char];
        }

        current.isEndOfWord = true;
    }

    search(word) {
        let current = this.root;

        for (let char of word) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }

        return current.isEndOfWord;
    }

    startsWith(prefix) {
        let current = this.root;

        for (let char of prefix) {
            if (!current.children[char]) {
                return false;
            }
            current = current.children[char];
        }

        return true;
    }
}

// Example usage
const trie = new Trie();

trie.insert("apple");
console.log(trie.search("apple"));   // true
console.log(trie.search("app"));     // false
console.log(trie.startsWith("app")); // true

trie.insert("app");
console.log(trie.search("app"));     // true
