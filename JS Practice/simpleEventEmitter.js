/*
Problem: Build a Simple Event Emitter
Design a class that simulates a basic Event Emitter (Pub/Sub system).

It should support:
  - on(event, callback)
  - emit(event, data)
  - off(event, callback)

📌 Requirements
on(event, callback)
  - Register a callback function for a specific event.
  - Multiple callbacks can be registered for the same event.

emit(event, data)
  - Invoke all callbacks associated with the event.
  - Pass data to each callback.

off(event, callback)
  - Remove a specific callback from an event.
  - If the callback is not found, do nothing.

🧪 Example Usage
const emitter = new EventEmitter();

function greet(name) {
  console.log("Hello " + name);
}

emitter.on("welcome", greet);
emitter.emit("welcome", "John"); 
// Output: Hello John

emitter.off("welcome", greet);
emitter.emit("welcome", "John"); 
// No output

⚡ Expected Complexity
  - on → O(1)
  - emit → O(n) (n = number of listeners for event)
  - off → O(n)
*/

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  emit(event, data) {
    if (!this.events[event]) return;

    this.events[event].forEach(callback => {
      callback(data);
    });
  }

  off(event, callback) {
    if (!this.events[event]) return;

    this.events[event] = this.events[event].filter(
      cb => cb !== callback
    );

    if (this.events[event].length === 0) {
      delete this.events[event];
    }
  }
}
