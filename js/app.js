document.getElementById('task-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const taskInput = document.getElementById('task');
    const task = taskInput.value;

    if (task) {
        addTaskToList(task);
        taskInput.value = ''; // Clear input field   
    }
});

function addTaskToList(task) {
    const taskList = document.getElementById('task-list');

    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.id = 'delete-button';
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'Delete';
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(deleteBtn.parentNode);
    });
}
