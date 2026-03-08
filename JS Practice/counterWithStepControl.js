/*
Counter with Step Control (Easy) — JavaScript (Vanilla JS)
📌 Problem Statement

Create a Counter application using HTML and JavaScript with step control.

Requirements
- Display a counter starting at 0.
- Provide buttons:
  - Increment (+)
  - Decrement (-)
  - Reset
- Add an input field to set the step value (default = 1).
- Increment and decrement should change the counter by the step value.
*/

<!DOCTYPE html>
<html>
<head>
  <title>Counter with Step Control</title>
</head>
<body>

<h2>Counter App</h2>

<h3>Count: <span id="count">0</span></h3>

<button id="increment">+</button>
<button id="decrement">-</button>
<button id="reset">Reset</button>

<br><br>

<label>Step:</label>
<input type="number" id="stepInput" value="1">

<script>

let count = 0;

const countDisplay = document.getElementById("count");
const stepInput = document.getElementById("stepInput");

document.getElementById("increment").addEventListener("click", () => {
  const step = Number(stepInput.value) || 1;
  count += step;
  updateDisplay();
});

document.getElementById("decrement").addEventListener("click", () => {
  const step = Number(stepInput.value) || 1;
  count -= step;
  updateDisplay();
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

function updateDisplay() {
  countDisplay.textContent = count;
}

</script>

</body>
</html>
