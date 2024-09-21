const newTaskInput =document.getElementById('new-task');
const addTaskBtn = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
const totalTaskSpan = document.getElementById('Total-tasks');
const completedTaskSpan = document.getElementById('completed-tasks');

let tasks=[];
function updateTaskSummary(){
    const totalTask = tasks.length;
    const completedTasks= tasks.filter(t=>t.completed).length;
    totalTaskSpan.textContent= totalTask;
    completedTaskSpan.textContent= completedTasks;
}

function createTaskItem(task){
    const li = document.createElement('li');
    li.classList.add('task-item');
    li.textContent=task.title;
    if(task.completed){
        li.classList.add('completed');
    }
    li.addEventListener('click',()=>toggleTaskCompletion(task,li));
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click',(event)=>{
        event.stopPropagation();//PREVENT TRIGGERING THE TOGGLE;
        removeTask(task,li);
    })
    li.appendChild(deleteButton);
    return li;

}
function addTask(){
    const taskTitle = newTaskInput.value.trim();
    if(taskTitle=='')
        return;
const newTask = {title:taskTitle,completed:false};
tasks.push(newTask);
const taskItem = createTaskItem(newTask);
taskList.appendChild(taskItem);
newTaskInput.value ='';//clearning input filed
updateTaskSummary();

}

function toggleTaskCompletion(task,taskItem){
    task.completed = !task.completed;
    taskItem.classList.toggle('completed');
    updateTaskSummary();
}

//remove task from list 
function removeTask(task,taskItem){
    tasks = tasks.filter(t=>t!==task);
    taskList.removeChild(taskItem);
    updateTaskSummary();
}
addTaskBtn.addEventListener('click',addTask);
updateTaskSummary();