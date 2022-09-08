import { FormUi } from "./util/formUi.js";
import { Storage } from "./util/storage.js";
import { TaskList } from "./util/taskList.js";
import { TaskListUi } from "./util/taskListUi.js";

const storage = new Storage();
const taskList = new TaskList(storage.tasks);
const ui = new TaskListUi();
const formUi = new FormUi();

const allTasks = taskList.returnTasks();
ui.initializeTasks(allTasks);
formUi.taskManagerTextHandler("new");

// Edit and Delete Functionality
document
  .querySelector(".todo-table-container")
  .addEventListener("click", (e) => {
    e.preventDefault();
    const edit = e.target.closest("a")?.classList.contains("btn-edit");
    const del = e.target.closest("a")?.classList.contains("btn-delete");
    const id = e.target.closest("tr").id;
    if (edit) {
      formUi.taskManagerTextHandler("edit");
      const taskToEdit = taskList.getSpecificTask(id);
      formUi.setFormElements(taskToEdit);
      formUi.setActionToPerform("edit");
    } else if (del) {
      ui.deleteTask(id);
      storage.deleteTaskFromLocalStorage(id);
      taskList.deleteTask(id);
    }
  });

document.querySelector("#todo-button").addEventListener("click", (e) => {
  e.preventDefault();
  const newTask = formUi.getFormElements();
  const isValid = formUi.validate(
    newTask.name,
    newTask.asignee,
    newTask.status
  );
  if (isValid) {
    const actionToPerfom = formUi.actionToPerform;
    if (actionToPerfom === "edit") {
      ui.editTask(newTask.id, newTask);
      taskList.editTask(newTask);
      storage.saveTasksToLocalStorage(taskList.allTasks);
    } else if (actionToPerfom === "new") {
      ui.createTask(newTask);
      taskList.createTask(newTask);
      storage.saveTasksToLocalStorage(taskList.allTasks);
    }
    formUi.clearForm();
    formUi.setActionToPerform("new");
    formUi.taskManagerTextHandler("new");
  }
});

//// DROPDOWNS & OTHER
////Form
//ASIGNEE
document
  .querySelector(".todo-dropdown-container")
  .addEventListener("click", () => {
    document
      .querySelector(".todo-dropdown-container ul")
      .classList.toggle("show");
  });

document
  .querySelector(".todo-dropdown-options")
  .addEventListener("click", (e) => {
    const selectionId = e.target.id;
    document.getElementById("todo-task-input-asignee").value = selectionId;
  });

//// Filter
/// CREATION DATE

// Toggle
document.getElementById("todo-filter-date").addEventListener("click", () => {
  document
    .querySelector(".todo-filter-dropdown-container ul")
    .classList.toggle("show");
});

// Dropdown Selection
document
  .getElementById("todo-filter-date-options")
  .addEventListener("click", (e) => {
    const selectionId = e.target.id;
    document.getElementById("todo-filter-date-input").value = selectionId;
    ui.removeAllTasksFromUi();
    taskList.setSortType("date", selectionId);
    ui.initializeTasks(taskList.returnTasks());
  });

/// STATUS
// Toggle
document.getElementById("todo-filter-status").addEventListener("click", () => {
  document.querySelector("#todo-filter-status ul").classList.toggle("show");
});

// Dropdown
document
  .getElementById("todo-filter-status-options")
  .addEventListener("click", (e) => {
    const selectionId = e.target.id;
    document.getElementById("todo-filter-status-input").value = selectionId;
    ui.removeAllTasksFromUi();
    taskList.setSortType("status", selectionId);
    ui.initializeTasks(taskList.returnTasks());
});

/// NAME
document
  .getElementById("todo-filter-input-name")
  .addEventListener("input", (e) => {
    const selectionId = e.target.value;
    ui.removeAllTasksFromUi()
    taskList.setSortType('name',selectionId)
    ui.initializeTasks(taskList.returnTasks())
});
