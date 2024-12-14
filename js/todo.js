const noticeForm = document.getElementById('notice-form');
const noticeList = document.getElementById('notice-list');
const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

noticeForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const noticeText = document.getElementById('notice-text').value;
    const noticeUrl = document.getElementById('notice-url').value;

    const li = document.createElement('li');
    li.innerHTML = `<a href="${noticeUrl}" target="_blank">${noticeText}</a> <button class="delete-btn">Delete</button>`;
    noticeList.appendChild(li);

    document.getElementById('notice-text').value = '';
    document.getElementById('notice-url').value = '';
});

todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    }
});

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const todoText = document.getElementById('todo-input').value;

    const li = document.createElement('li');
    li.textContent = todoText;
    li.innerHTML += '<button class="delete-btn">Delete</button>';
    todoList.appendChild(li);

    document.getElementById('todo-input').value = '';
});

todoList.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
        event.target.parentElement.remove();
    }
});