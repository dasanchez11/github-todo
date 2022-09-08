export class TaskListUi {
  deleteTask = (taskId) => {
    const taskToDelete = document.getElementById(taskId);
    taskToDelete.remove();
  };

  createTask = (task) => {
    const table = document.querySelector("tbody.todo-table-container");
    const newTask = this.newTaskElement(task);
    table.appendChild(newTask);
  };

  editTask = (id, newTask) =>{
    const taskName = document.getElementById(`name-${id}`);
    taskName.innerText = newTask.name;
    const taskStatus = document.getElementById(`status-${id}`);
    taskStatus.innerText = newTask.status;
    const taskAsignee = document.getElementById(`asignee-${id}`);
    taskAsignee.innerText = newTask.asignee;
  }

  newTaskElement = (inputTask) => {
    const { id, name, asignee, status, date } = inputTask;
    let newDate;
    try {
      newDate = date.split("T")[0];
    } catch (error) {
      newDate = date.toISOString().split("T")[0];
    }
    const task = document.createElement("tr");
    task.setAttribute("id", id);
    task.setAttribute("class", "todo-table-row");
    task.innerHTML = this.createTd(false);
    task.prepend(this.createTd(true, status, "status", id));
    task.prepend(this.createTd(true, newDate, "date", id));
    task.prepend(this.createTd(true, asignee, "asignee", id));
    task.prepend(this.createTd(true, name, "name", id));
    task.prepend(this.createTd(true, id, "id", id));
    return task;
  };

  createTd = (textInput = true, input, fieldName, id) => {
    const td = document.createElement("td");
    this.tdWidths(fieldName, td);
    if (textInput) {
      td.setAttribute("id", `${fieldName}-${id}`);
      td.innerText = input;
      return td;
    } else {
      return (td.innerHTML = `
            <td>
                <div class="actions-container">
                    <a class="button-delete btn-delete" href="#">
                        <i class="fa-solid fa-trash"></i>
                    </a>
                    <a class="button-primary btn-edit" href="#">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </a>
                </div>
            </td>
                `);
    }
  };

  tdWidths = (fieldName, td) => {
    if (fieldName === "asignee") {
      td.style.width = "100px";
      td.style.maxWidth = "100px";
    } else if (fieldName === "id") {
      td.style.width = "130px";
      td.style.maxWidth = "130";
    } else if (fieldName === "name") {
      td.style.width = "100px";
      td.style.maxWidth = "100px";
    } else if (fieldName === "date") {
      td.style.width = "95px";
      td.style.maxWidth = "95px";
    } else if (fieldName === "status") {
      td.style.width = "70px";
      td.style.maxWidth = "70px";
    }
  };

  removeAllTasksFromUi = () => {
    document.querySelector(".todo-table-container").innerHTML = "";
  };

  initializeTasks = (allTasks) => {
    let currentTasks = allTasks;
    for (let task of currentTasks) {
      this.createTask(task, true);
    }
  };


}
