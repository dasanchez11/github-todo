//// Variables
let actionToPerfom = "new";
let radioSelection = ''
// let allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
// let dateSortVal = ''
// let statusFilterVal = ''
// let nameFilterVal = ''

// const getActionToPerform=()=>{
//     return actionToPerfom
// }

// const setActionToPerform = (value) =>{
//     actionToPerfom = value
// }

// const getRadioSelection = () =>{
//     return radioSelection
// }

// const setRadioSelection = (value) =>{
//     radioSelection = value
// }

// const returnTasks = () =>{
//     let tasksFiltered = allTasks
//     tasksFiltered = nameFilter(nameFilterVal,tasksFiltered)
//     tasksFiltered = dateSorter(dateSortVal,tasksFiltered)
//     tasksFiltered = statusFilter(statusFilterVal,tasksFiltered)
//     return tasksFiltered
// }

// const setTasks = (newTasks) =>{
//     allTasks = newTasks
// }

// const resetTasks = () =>{
//     allTasks = JSON.parse(localStorage.getItem("tasks"))
// }

// const setSortType = (type,value) =>{
//     if(type==='date'){
//         dateSortVal = value
//     }else if (type==='status'){
//         statusFilterVal = value
//     }else if (type==='name'){
//         nameFilterVal = value
//     }
// }

///// TASK UTILS
// All Tasks
// const getTasks = () => {
//     return returnTasks()
//   };
  
//   // One Task
// const getSpecificTask = (id) => {
//     const tasks = getTasks();
//     return tasks.filter((task) => task.id === id);
//   };
  
//   // Delete task
// const deleteTask = (taskId) => {
//     const taskToDelete = document.getElementById(taskId);
//     taskToDelete.remove();
//     deleteTaskFromLocalStorage(taskId);
//   };
  
//   // create task
// const createTask = (task, initialize = false) => {
//     const table = document.querySelector("tbody.todo-table-container");
//     const newTask = newTaskElement(task);
//     table.appendChild(newTask);
//     let allTasks = getTasks();
//     const newAllTasks = [...allTasks, task];
//     if (!initialize) {
//       saveTasksToLocalStorage(newAllTasks);
//     }
//   };
  
//   // edit task
// const editTask = (id, newTask) => {
//     const taskName = document.getElementById(`name-${id}`);
//     taskName.innerText = newTask.name;
//     const taskStatus = document.getElementById(`status-${id}`);
//     taskStatus.innerText = newTask.status;
//     const taskAsignee = document.getElementById(`asignee-${id}`);
//     taskAsignee.innerText = newTask.asignee;
//     editTaskInLocalStorage(newTask);
//   };
  
  // Local Storage
  // const deleteTaskFromLocalStorage = (taskId) => {
  //   let tasks = getTasks();
  //   tasks = tasks.filter((task) => task.id !== taskId);
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  //   resetTasks()
  // };
  
  // const saveTasksToLocalStorage = (tasks) => {
  //   localStorage.removeItem('tasks')
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  //   resetTasks()
  // };
  
  // const editTaskInLocalStorage = (editTask) => {
  //   const tasks = getTasks();
  //   const newTasksArray = tasks.map((task) => {
  //     if (task.id === editTask.id) {
  //       return { ...task, ...editTask };
  //     }
  //     return task;
  //   });
  //   saveTasksToLocalStorage(newTasksArray);
  //   resetTasks()
  // };
  
  // Tasks Other Utils
// const taskManagerTextHandler = (taskType) => {
//     const taskManagerOptions = gettaskManagerOptions();
//     const options = taskManagerOptions[taskType];
//     const taskManagerTitle = document.getElementById("todo-title");
//     const taskManagerButton = document.getElementById("todo-button");
//     taskManagerTitle.innerText = options.title;
//     taskManagerButton.innerText = options.button;
//     const id = document.getElementById("todo-task-input-id");
//     if (taskType === "new") {
//       id.value = new Date().getTime();
//     }
//   };
  
  // const gettaskManagerOptions = () => {
  //   const taskManagerOptions = {
  //     edit: {
  //       title: "Edit Interface",
  //       button: "Edit Task",
  //     },
  //     new: {
  //       title: "New Task Interface",
  //       button: "Create Task",
  //     },
  //   };
  //   return taskManagerOptions;
  // };
  
// const initializeTasks = () => {
//     let currentTasks = getTasks();
//     for (let task of currentTasks) {
//       createTask(task, true);
//     }
//     taskManagerTextHandler(getActionToPerform());
//   };
  
// const clearForm = () => {
//     document.querySelector(".todo-form-container").reset();
//   };
  
  // Filters
  
// const nameFilter = (name, tasks) => {
//     let currentTasks = tasks
//     if(name!==''){
//       currentTasks = currentTasks.filter((task) =>task.name.toLowerCase().includes(name.toLowerCase())
//       );
//     }
//     return currentTasks
//   };
  
// const statusFilter = (status, tasks) => {
//     let currentTasks = tasks
//     if(status!==''){
//       currentTasks = currentTasks.filter((task) =>
//         task.status.toLowerCase() === status.toLowerCase()
//       );
//     }
//     return currentTasks
//   };
  
// const dateSorter = (type,tasks) =>{
//     let returnValue = tasks
//     if(type!==''){
//       if(type==='Ascending'){
//         returnValue = tasks.sort((x, y)=>{
//           const xval = new Date(x.date)
//           const yval = new Date(y.date)
//           return Number(xval) - Number(yval);
//       })
//       }else if(type==='Descending'){
//         returnValue =  tasks.sort((x, y)=>{
//           const xval = new Date(x.date)
//           const yval = new Date(y.date)
//           return -Number(xval) + Number(yval);
//       })
//       }
//     }
//     return returnValue
//   }
  
  
// const validate = (name,asignee,status) => {
//     let result = true
//     if(!name ||!asignee || !status){
//       alert('You must fill the information')
//       result = false
//     }
  
//     if(name.length>99){
//       alert('Name must be less than 100 characters long')
//       result = false
//     }
  
//     return result
//   }
  
  /// UI Utils
  // TASKS UTILS
// const newTaskElement = ({ id, name, asignee, status, date }) => {
//     let newDate;
//     try {
//       newDate = date.split("T")[0];
//     } catch (error) {
//       newDate = date.toISOString().split("T")[0];
//     }
//     const task = document.createElement("tr");
//     task.setAttribute("id", id);
//     task.setAttribute("class", "todo-table-row");
//     task.innerHTML = createTd(false);
//     task.prepend(createTd(true, status, "status", id));
//     task.prepend(createTd(true, newDate, "date", id));
//     task.prepend(createTd(true, asignee, "asignee", id));
//     task.prepend(createTd(true, name, "name", id));
//     task.prepend(createTd(true, id, "id", id));
//     return task;
//   };
  
  // const createTd = (textInput = true, input, fieldName, id) => {
  //   const td = document.createElement("td");
  //   tdWidths(fieldName,td)
  //   if (textInput) {
  //     td.setAttribute("id", `${fieldName}-${id}`);
  //     td.innerText = input;
  //     return td;
  //   } else {
  //     return (td.innerHTML = `
  //       <td>
  //           <div class="actions-container">
  //               <a class="button-delete btn-delete" href="#">
  //                   <i class="fa-solid fa-trash"></i>
  //               </a>
  //               <a class="button-primary btn-edit" href="#">
  //                   <i class="fa-solid fa-pen-to-square"></i>
  //               </a>
  //           </div>
  //       </td>
  //           `);
  //   }
  // };
  
// const removeAllTasksFromUi = () => {
//     document.querySelector(".todo-table-container").innerHTML = '';
//   };
  
  
// const tdWidths = (fieldName,td) =>{
//     if (fieldName==='asignee'){
//       td.style.width = '100px'
//       td.style.maxWidth = '100px'
//     }else if(fieldName==='id'){
//       td.style.width = '130px'
//       td.style.maxWidth = '130'
//     }else if(fieldName==='name'){
//       td.style.width = '100px'
//       td.style.maxWidth = '100px'
//     }else if(fieldName==='date'){
//       td.style.width = '95px'
//       td.style.maxWidth = '95px'
//     }else if(fieldName==='status'){
//       td.style.width = '70px'
//       td.style.maxWidth = '70px'
//     }
//   }
  
//// TASKS UI MANIPULATION
// TASKS EVENT LISTENERS
////Edit or delete a task

// document
//   .querySelector(".todo-table-container")
//   .addEventListener("click", (e) => {
//     e.preventDefault();
//     const edit = e.target.closest("a")?.classList.contains("btn-edit");
//     const del = e.target.closest("a")?.classList.contains("btn-delete");
//     if (edit) {
//       taskManagerTextHandler(getActionToPerform());
//       const id = e.target.closest("tr").id;
//       const taskToEdit = getSpecificTask(id)[0];
//       // document.getElementById("todo-task-input-id").value = taskToEdit.id;
//       // document.getElementById("todo-task-input-name").value = taskToEdit.name;
//       // document.getElementById("todo-task-input-asignee").value =
//       //   taskToEdit.asignee;
//       // document.getElementById(taskToEdit.status).checked = true;
//     } else if (del) {
//       const id = e.target.closest("tr").id;
//       deleteTask(id);
//     }
//   });

////Edit or delete a task
// document.querySelector("#todo-button").addEventListener("click", (e) => {
//   e.preventDefault();
//   const id = document.getElementById("todo-task-input-id").value;
//   const name = document.getElementById("todo-task-input-name").value;
//   const asignee = document.getElementById("todo-task-input-asignee").value;
//   let status
//   try {
//     status = document.querySelector('input[name="todo-status"]:checked').value
//   } catch (error) {
//     status = null
//   }
//   let date = new Date();
//   const newTask = { id, name, asignee, status, date };
//   const isValid = validate(name,asignee,status)

//   if(isValid){
//     const actionToPerfom = getActionToPerform();
//     if (actionToPerfom === "edit") {
//       editTask(id, newTask);
//     } else if (actionToPerfom === "new") {
//       createTask(newTask);
//     }
//     clearForm();
//     setActionToPerform("new");
//     taskManagerTextHandler(getActionToPerform());
//   }

// });

//// DROPDOWNS & OTHER
////Form
//ASIGNEE
// document
//   .querySelector(".todo-dropdown-container")
//   .addEventListener("click", () => {
//     document
//       .querySelector(".todo-dropdown-container ul")
//       .classList.toggle("show");
//   });

// document
//   .querySelector(".todo-dropdown-options")
//   .addEventListener("click", (e) => {
//     const selectionId = e.target.id;
//     document.getElementById("todo-task-input-asignee").value = selectionId;
//   });

// RADIO
// document.querySelector('.todo-form-element-radio').addEventListener('click',(e)=>{
//   setRadioSelection(e.target.id)
// })


//// Filter
// CREATION DATE
// document.getElementById("todo-filter-date").addEventListener("click", () => {
//     document
//       .querySelector(".todo-filter-dropdown-container ul")
//       .classList.toggle("show");
//   });


// document
//   .getElementById("todo-filter-date-options")
//   .addEventListener("click", (e) => {
//     const selectionId = e.target.id;
//     document.getElementById("todo-filter-date-input").value = selectionId;
//     removeAllTasksFromUi(getTasks())
//     setSortType('date',selectionId)
//     initializeTasks()
//   });

// // STATUS
// document.getElementById("todo-filter-status").addEventListener("click", () => {
//     document
//       .querySelector("#todo-filter-status ul")
//       .classList.toggle("show");
//   });
//   document
//   .getElementById("todo-filter-status-options")
//   .addEventListener("click", (e) => {
//     const selectionId = e.target.id;
//     document.getElementById("todo-filter-status-input").value = selectionId;
//     removeAllTasksFromUi(getTasks())
//     setSortType('status',selectionId)
//     initializeTasks()
//   });

  //NAME
  document
  .getElementById("todo-filter-input-name")
  .addEventListener("input", (e) => {
    const selectionId = e.target.value;
    removeAllTasksFromUi()
    setSortType('name',selectionId)
    initializeTasks()
  });

initializeTasks()