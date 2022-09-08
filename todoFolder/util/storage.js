export class Storage {
  tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  deleteTaskFromLocalStorage = (taskId) => {
    let tasks = this.tasks;
    tasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.resetTasks();
  };

  saveTasksToLocalStorage = (tasks) => {
    localStorage.removeItem("tasks");
    localStorage.setItem("tasks", JSON.stringify(tasks));
    this.resetTasks();
  };


  resetTasks = () => {
    this.tasks = JSON.parse(localStorage.getItem("tasks"));
  };
}

