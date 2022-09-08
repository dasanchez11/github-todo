import {Task} from './task.js'

export class TaskList {
  dateSortVal = "";
  statusFilterVal = "";
  nameFilterVal = "";
  allTasks = []

  constructor(tasks) {
    tasks.forEach(task =>{
      const {id,name,asignee,status,date} = task
      const newTask = new Task(id,name,asignee,status,date)
      this.allTasks.push(newTask)
    });
  }

  setTasks = (newTasks) => {
    this.allTasks = newTasks;
  };

  // One Task
  getSpecificTask = (id) => {
    const tasks = this.allTasks;
    return tasks.filter((task) => task.id === id)[0];
  };

  // Delete task
  deleteTask = (taskId) => {
    let allTasks = this.allTasks;
    allTasks = allTasks.filter((task) => task.id !== taskId);
    this.setTasks(allTasks);
  };

  // create task
  createTask = (task) => {
    let allTasks = this.allTasks;
    const newAllTasks = [...allTasks, task];
    this.setTasks(newAllTasks);
  };

  // edit task
  editTask = (editTask) => {
    const tasks = this.allTasks;
    const newTasksArray = tasks.map((task) => {
      if (task.id === editTask.id) {
        return { ...task, ...editTask };
      }
      return task;
    });
    this.setTasks(newTasksArray)
  };

  returnTasks = () => {
    
    let tasksFiltered = this.allTasks;
    tasksFiltered = this.nameFilter(this.nameFilterVal, tasksFiltered);
    tasksFiltered = this.dateSorter(this.dateSortVal, tasksFiltered);
    tasksFiltered = this.statusFilter(this.statusFilterVal, tasksFiltered);
    return tasksFiltered;
  };

  setSortType = (type, value) => {
    if (type === "date") {
      this.dateSortVal = value;
    } else if (type === "status") {
      this.statusFilterVal = value;
    } else if (type === "name") {
      this.nameFilterVal = value;
    }
  };

  nameFilter = (name, tasks) => {
    let currentTasks = tasks;
    if (name !== "") {
      currentTasks = currentTasks.filter((task) =>
        task.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    return currentTasks;
  };

  statusFilter = (status, tasks) => {
    let currentTasks = tasks;
    if (status !== "") {
      currentTasks = currentTasks.filter(
        (task) => task.status.toLowerCase() === status.toLowerCase()
      );
    }
    return currentTasks;
  };

  dateSorter = (type, tasks) => {
    let returnValue = tasks;
    if (type !== "") {
      if (type === "Ascending") {
        returnValue = tasks.sort((x, y) => {
          const xval = new Date(x.date);
          const yval = new Date(y.date);
          return Number(xval) - Number(yval);
        });
      } else if (type === "Descending") {
        returnValue = tasks.sort((x, y) => {
          const xval = new Date(x.date);
          const yval = new Date(y.date);
          return -Number(xval) + Number(yval);
        });
      }
    }
    return returnValue;
  };
}
