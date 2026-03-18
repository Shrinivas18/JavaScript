/*
🧩 Problem Statement
Build a modal (popup) system in vanilla JavaScript with the following features:

Functional Requirements
1. Open modal on button click
2. Close modal when:
  -  Clicking outside the modal (overlay)
  -  Pressing the Escape key
3. Support multiple modals
4. Ensure proper event listener cleanup

Non-Functional Concepts
-  Event delegation & global listeners
-  UI layering using z-index
-  Clean separation of concerns (HTML, CSS, JS)
-  Avoid memory leaks (important for frameworks like React later)
*/

// HTML
<button data-modal-target="#modal1">Open Modal 1</button>
<button data-modal-target="#modal2">Open Modal 2</button>

<div id="overlay"></div>

<div class="modal" id="modal1">
  <div class="modal-content">
    <button class="close-btn">&times;</button>
    <h2>Modal 1</h2>
    <p>This is the first modal</p>
  </div>
</div>

<div class="modal" id="modal2">
  <div class="modal-content">
    <button class="close-btn">&times;</button>
    <h2>Modal 2</h2>
    <p>This is the second modal</p>
  </div>
</div>

// CSS
body {
  font-family: Arial, sans-serif;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: 0.2s ease-in-out;
  z-index: 10;
  background: white;
  padding: 20px;
  border-radius: 8px;
}

.modal.active {
  transform: translate(-50%, -50%) scale(1);
}

.modal-content {
  position: relative;
}

.close-btn {
  position: absolute;
  right: 10px;
  top: 5px;
  cursor: pointer;
  border: none;
  background: none;
  font-size: 20px;
}

#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  opacity: 0;
  pointer-events: none;
  transition: 0.2s ease-in-out;
  z-index: 5;
}

#overlay.active {
  opacity: 1;
  pointer-events: all;
}

// JavaScript
const openButtons = document.querySelectorAll('[data-modal-target]');
const closeButtons = document.querySelectorAll('.close-btn');
const overlay = document.getElementById('overlay');

let activeModal = null;

// Open modal
openButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

// Close button inside modal
closeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

// Overlay click closes modal
overlay.addEventListener('click', () => {
  if (activeModal) closeModal(activeModal);
});

// Escape key listener (global)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && activeModal) {
    closeModal(activeModal);
  }
});

function openModal(modal) {
  if (!modal) return;

  // Close existing modal (optional behavior)
  if (activeModal) closeModal(activeModal);

  modal.classList.add('active');
  overlay.classList.add('active');
  activeModal = modal;
}

function closeModal(modal) {
  if (!modal) return;

  modal.classList.remove('active');
  overlay.classList.remove('active');
  activeModal = null;
}
