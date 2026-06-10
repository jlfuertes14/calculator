# 🧮 Orion Calculator

A clean, functional browser-based calculator built with vanilla HTML, CSS, and JavaScript — part of [The Odin Project](https://www.theodinproject.com/) JavaScript Fundamentals curriculum.

## 🔗 Live Demo

> Open `index.html` directly in your browser — no build step required.

## ✨ Features

- **Basic arithmetic** — Addition, Subtraction, Multiplication, Division
- **Percentage** — Instantly convert a number to its percentage value
- **Chained operations** — Shows running expression on the display (e.g. `12 + 5`)
- **Clear (A/C)** — Resets the calculator to its initial state
- **Decimal support** — Enter floating-point numbers with the `.` button
- **Double zero (00)** — Convenience button for larger numbers
- **Division by zero guard** — Returns `"Error"` instead of `Infinity`

## 🗂️ Project Structure

```
calculator/
├── index.html          # Markup & layout
├── calculatorProj.js   # All calculator logic
└── style.css           # Styling
```

## 🛠️ How It Works

State is managed with three variables:

| Variable | Purpose |
|---|---|
| `currentInput` | The number currently being typed |
| `firstNumber` | The first operand stored after an operator is pressed |
| `operator` | The active operator (`"add"`, `"subtract"`, etc.) |

Button clicks are handled by a single `inputButtons()` function using a `switch` statement that routes to the appropriate action (number input, operator selection, calculate, clear, percent).

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/jlfuertes14/calculator.git

# Open in browser
start index.html   # Windows
open index.html    # macOS
```

## 📚 Built With

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)

## 👤 Author

**jlfuertes14** · [GitHub](https://github.com/jlfuertes14)

---

*Project from [The Odin Project](https://www.theodinproject.com/) — JavaScript Fundamentals*
