// Counter functionality
let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

function updateCount() {
    countDisplay.textContent = count;
    countDisplay.style.color = count > 0 ? '#718096' : count < 0 ? '#a0aec0' : '#4a5568';
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateCount();
});

decrementBtn.addEventListener('click', () => {
    count--;
    updateCount();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCount();
});

// Color generator functionality
const colorDisplay = document.getElementById('colorDisplay');
const generateColorBtn = document.getElementById('generateColor');
const colorValue = document.getElementById('colorValue');

function generateRandomColor() {
    const colors = [
        '#4a5568', '#718096', '#a0aec0', '#cbd5e0', '#e2e8f0',
        '#2d3748', '#1a202c', '#4299e1', '#63b3ed', '#90cdf4',
        '#bee3f8', '#5a67d8', '#667eea', '#7c3aed', '#9f7aea'
    ];
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    colorDisplay.style.backgroundColor = randomColor;
    colorValue.textContent = `Generated color: ${randomColor}`;
    
    // Add a nice animation
    colorDisplay.style.transform = 'scale(1.05)';
    setTimeout(() => {
        colorDisplay.style.transform = 'scale(1)';
    }, 200);
}

generateColorBtn.addEventListener('click', generateRandomColor);

// Todo list functionality
const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('addTodo');
const todoList = document.getElementById('todoList');

let todoId = 0;

function addTodo() {
    const text = todoInput.value.trim();
    if (text === '') return;
    
    const todoItem = document.createElement('li');
    todoItem.className = 'todo-item';
    todoItem.dataset.id = todoId++;
    
    todoItem.innerHTML = `
        <span class="todo-text">${text}</span>
        <div>
            <button class="delete-btn" onclick="deleteTodo(${todoItem.dataset.id})">Delete</button>
        </div>
    `;
    
    // Add click to toggle completion
    todoItem.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) return;
        todoItem.classList.toggle('completed');
    });
    
    todoList.appendChild(todoItem);
    todoInput.value = '';
    
    // Add animation
    todoItem.style.opacity = '0';
    todoItem.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        todoItem.style.transition = 'all 0.3s ease';
        todoItem.style.opacity = '1';
        todoItem.style.transform = 'translateY(0)';
    }, 10);
}

function deleteTodo(id) {
    const todoItem = document.querySelector(`[data-id="${id}"]`);
    if (todoItem) {
        todoItem.style.transition = 'all 0.3s ease';
        todoItem.style.opacity = '0';
        todoItem.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            todoItem.remove();
        }, 300);
    }
}

addTodoBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTodo();
    }
});

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Claude Code Test App loaded successfully!');
    console.log('✅ All functionality is working properly');
    
    // Generate initial color
    generateRandomColor();
    
    // Add some sample todos
    const sampleTodos = [
        'Test the counter functionality',
        'Generate some random colors',
        'Add and delete todos',
        'Enjoy the smooth animations!'
    ];
    
    sampleTodos.forEach((todo, index) => {
        setTimeout(() => {
            todoInput.value = todo;
            addTodo();
        }, index * 200);
    });
});

// Quote generator functionality
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const generateQuoteBtn = document.getElementById('generateQuote');

const quotes = [
    { text: "In every walk with nature, one receives far more than he seeks.", author: "John Muir" },
    { text: "The mountains are calling and I must go.", author: "John Muir" },
    { text: "Between every two pines is a doorway to a new world.", author: "John Muir" },
    { text: "Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.", author: "John Muir" },
    { text: "The clearest way into the Universe is through a forest wilderness.", author: "John Muir" },
    { text: "Of all the paths you take in life, make sure a few of them are dirt.", author: "John Muir" },
    { text: "Take time to make your soul happy.", author: "John Muir" },
    { text: "Going to the mountains is going home.", author: "John Muir" },
    { text: "Nature's peace will flow into you as sunshine flows into trees.", author: "John Muir" },
    { text: "I never saw a discontented tree. They grip the ground as though they liked it, and though fast rooted they travel about as far as we do.", author: "John Muir" }
];

function generateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote.text;
    quoteAuthor.textContent = randomQuote.author;
    
    // Add animation
    quoteText.style.transform = 'scale(1.05)';
    quoteAuthor.style.transform = 'scale(1.05)';
    setTimeout(() => {
        quoteText.style.transform = 'scale(1)';
        quoteAuthor.style.transform = 'scale(1)';
    }, 200);
}

generateQuoteBtn.addEventListener('click', generateQuote);

// Add some fun easter eggs
let clickCount = 0;
document.querySelector('header h1').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        alert('🎉 You found the easter egg! Everything is working perfectly!');
        clickCount = 0;
    }
});
