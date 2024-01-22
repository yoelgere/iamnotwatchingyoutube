function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const taskText = document.createTextNode(taskInput.value);
        const listItem = document.createElement('li');
        const deleteBtn = document.createElement('button');

        listItem.appendChild(taskText);
        listItem.appendChild(deleteBtn);
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        taskList.appendChild(listItem);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}