export class FormUi {
  actionToPerform = 'new'

  taskManagerTextHandler = (taskType) => {
    const taskManagerOptions = this.gettaskManagerOptions();
    const options = taskManagerOptions[taskType];
    const taskManagerTitle = document.getElementById("todo-title");
    const taskManagerButton = document.getElementById("todo-button");
    taskManagerTitle.innerText = options.title;
    taskManagerButton.innerText = options.button;
    const id = document.getElementById("todo-task-input-id");
    if (taskType === "new") {
      id.value = new Date().getTime();
    }
  };

  gettaskManagerOptions = () => {
    const taskManagerOptions = {
      edit: {
        title: "Edit Interface",
        button: "Edit Task",
      },
      new: {
        title: "New Task Interface",
        button: "Create Task",
      },
    };
    return taskManagerOptions;
  };

  validate = (name,asignee,status) => {
    let result = true
    if(!name ||!asignee || !status){
      alert('You must fill the information')
      result = false
    }
  
    if(name.length>99){
      alert('Name must be less than 100 characters long')
      result = false
    }
  
    return result
  }

  setFormElements = (taskToEdit) =>{
    document.getElementById("todo-task-input-id").value = taskToEdit.id;
      document.getElementById("todo-task-input-name").value = taskToEdit.name;
      document.getElementById("todo-task-input-asignee").value =
        taskToEdit.asignee;
      document.getElementById(taskToEdit.status).checked = true
  }

  getFormElements = () =>{
    const id = document.getElementById("todo-task-input-id").value;
    const name = document.getElementById("todo-task-input-name").value;
    const asignee = document.getElementById("todo-task-input-asignee").value;
    let status
    try {
      status = document.querySelector('input[name="todo-status"]:checked').value
    } catch (error) {
      status = null
    }
    let date = new Date();
    const newTask = { id, name, asignee, status, date };
    return newTask
  }

  setActionToPerform(action){
    this.actionToPerform = action
  }

  clearForm = () => {
    document.querySelector(".todo-form-container").reset();
  };
}
