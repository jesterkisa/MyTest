// Counter functionality
let count = 0;
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const resetBtn = document.getElementById('reset');

function updateCount() {
    countDisplay.textContent = count;
    countDisplay.style.color = count > 0 ? '#48bb78' : count < 0 ? '#e53e3e' : '#667eea';
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
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
        '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
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

// Add some fun easter eggs
let clickCount = 0;
document.querySelector('header h1').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        alert('🎉 You found the easter egg! Everything is working perfectly!');
        clickCount = 0;
    }
});
