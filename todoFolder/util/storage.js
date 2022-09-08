export class Storage {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  saveTasksToLocalStorage = (tasks) => {
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  resetTasks = () => {
    this.tasks = JSON.parse(localStorage.getItem("tasks"));
  };
}
