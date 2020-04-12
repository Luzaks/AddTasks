class Task {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    resetForm() {
        document.getElementById('task-form').reset();
    }
    addTask(task) {
        const tasksList = document.getElementById('tasks-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Task</strong>: ${task.name}
                    <strong>Price</strong>: ${task.price}
                    <strong>Year</strong>: ${task.year}
                    <a href="#" class="btn btn-danger" name="Delete">Delete</a>
                </div>
            </div>
        `;
        tasksList.appendChild(element);
        this.resetForm();
    }

    deleteTask(element) {
        if (element.name === 'Delete') {
            element.parentElement.parentElement.parentElement.remove();
        }
    }
}

document.getElementById('task-form').addEventListener('submit', function (e) {
    const taskname = document.getElementById('name').value;
    const taskprice = document.getElementById('price').value;
    const taskyear = document.getElementById('year').value;
    const task = new Task(taskname, taskprice, taskyear);

    const ui = new UI();
    ui.addTask(task);

    e.preventDefault();
});

document.getElementById('tasks-list').addEventListener('click', function(e){
   const ui = new UI();
   ui.deleteTask(e.target);
});