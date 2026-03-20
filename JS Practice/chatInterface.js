/*

🧩 Problem Statement

Build a frontend-only chat interface with the following features:

Functional Requirements
1. User can type a message in an input field
2. On submit, the message appears in a chat list
3. Chat automatically scrolls to the latest message

Non-Functional Concepts
1. Dynamic DOM rendering (creating elements on the fly)
2. Managing lists of messages
3. DOM side effects (auto-scroll behavior)

*/

// HTML
<div class="chat-container">
  <div id="chat-box"></div>

  <form id="chat-form">
    <input type="text" id="chat-input" placeholder="Type a message..." required />
    <button type="submit">Send</button>
  </form>
</div>

// CSS
.chat-container {
  width: 300px;
  margin: 20px auto;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  height: 400px;
}

#chat-box {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
  background: #f9f9f9;
}

.message {
  margin-bottom: 8px;
  padding: 8px 10px;
  background: #e1f5fe;
  border-radius: 6px;
  max-width: 80%;
}

form {
  display: flex;
}

input {
  flex: 1;
  padding: 10px;
  border: none;
  border-top: 1px solid #ccc;
}

button {
  padding: 10px;
  border: none;
  background: #2196f3;
  color: white;
  cursor: pointer;
}

// JavaScript

const form = document.getElementById('chat-form');
const input = document.getElementById('chat-input');
const chatBox = document.getElementById('chat-box');

// Store messages (optional but good practice)
let messages = [];

// Handle form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (text === '') return;

  const message = {
    id: Date.now(),
    text
  };

  messages.push(message);
  renderMessage(message);

  input.value = '';
});

// Render a single message
function renderMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.textContent = message.text;

  chatBox.appendChild(div);

  // Auto-scroll (DOM side effect)
  chatBox.scrollTop = chatBox.scrollHeight;
}
