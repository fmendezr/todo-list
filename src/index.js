import "./style.css";
import addSymbol from "./img/addIcon.svg";
import closeSymbol from "./img/closeIcon.svg";
import {add, format} from "date-fns";

// Set up factories 
const taskFactory = (name, description, dueDate, priority, completed = false) => {
    return {name, description, dueDate, priority, completed}
}

const projectFactory = (name) => {
    let tasks = []
    return {name, tasks}
}

// set up default functions 
const inbox = projectFactory("inbox")
//const btn = document.getElementById("btn");
//const input = document.getElementById("dueDate");

// Convert input into date
//btn.addEventListener("click", () => {
//    console.log(new Date())
//    let parts = input.value.split("-")
//    console.log(new Date([parts[0], parts[1], parts[2]]))
//})

const createProjectComponent = () => {
    let addProject = document.createElement("div");
    addProject.id = "addProject";
    addProject.classList.add("projectContainer");
    document.getElementById("customProjects").appendChild(addProject);

    addProject.addEventListener("click", () => {
        addProject.remove();
        expandedCreateProjectComponent();
    })

    let img = new Image();
    img.src = addSymbol;
    img.classList.add("projectIcon");
    img.alt = "addition symbol";
    addProject.appendChild(img);

    let text = document.createElement("p");
    text.textContent = "Add Project";
    addProject.appendChild(text);
}

const expandedCreateProjectComponent = () => {
    let projectCreator = document.createElement("div");
    projectCreator.id = "projectCreator";
    document.getElementById("customProjects").appendChild(projectCreator);

    let form = document.createElement("div");
    projectCreator.appendChild(form);

    let newProjectName = document.createElement("input");
    newProjectName.type = "text"; 
    newProjectName.id = "newProjectName";
    form.appendChild(newProjectName);

    let div = document.createElement("div");
    div.id= "btnContainer";
    form.appendChild(div);

    let createBtn = document.createElement("button");
    createBtn.id = "createProjectBtn";
    createBtn.textContent = "Create";
    div.appendChild(createBtn)

    let cancelBtn = document.createElement("button");
    cancelBtn.id = "cancelProjectBtn";
    cancelBtn.textContent = "Cancel";
    div.appendChild(cancelBtn);

    cancelBtn.addEventListener("click", () => {
        projectCreator.remove();
        createProjectComponent();
    })
}

createProjectComponent();

const currentProjectName = () => {
    const projectName = document.createElement("h1");
    projectName.textContent = inbox.name;
    document.getElementById("currentProject").appendChild(projectName);
}

const addTaskComponent = () => {
    const addTaskBtn = document.createElement("div");
    addTaskBtn.id = "addTask";
    document.getElementById("currentProject").appendChild(addTaskBtn);

    addTaskBtn.addEventListener("click", () => {
        addTaskBtn.remove();
        expandedAddTaskComponent();
    })

    const img = new Image();
    img.src = addSymbol;
    img.classList.add("projectIcon");
    img.alt = "addition symbol";
    addTaskBtn.appendChild(img);

    const text = document.createElement("p");
    text.textContent = "Add Task";
    addTaskBtn.appendChild(text);
}

const expandedAddTaskComponent = () => {
    let taskCreator = document.createElement("div");
    taskCreator.id = "taskCreator";
    document.getElementById("currentProject").appendChild(taskCreator);

    let form = document.createElement("form");
    taskCreator.appendChild(form);

    let labelName = document.createElement("label");
    labelName.textContent = "Name"
    labelName.for = "nameInput";
    form.appendChild(labelName)
    
    let nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.id = "nameInput";
    form.appendChild(nameInput);

    let labelDueDate = document.createElement("label");
    labelDueDate.textContent = "Due Date";
    labelDueDate.for = "dueDateInput";
    form.appendChild(labelDueDate);

    let dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.id = "dueDateInput";
    form.appendChild(dueDateInput);

    let labelDescription = document.createElement("label");
    labelDescription.textContent = "Description"
    labelDescription.for = "descriptionInput";
    form.appendChild(labelDescription);

    let descriptionInput = document.createElement("input");
    descriptionInput.type = "text";
    descriptionInput.id = "descriptionInput";
    form.appendChild(descriptionInput);

    let labelNotes = document.createElement("label");
    labelNotes.textContent = "Notes";
    labelNotes.for = "notesInput";
    form.appendChild(labelNotes);

    let notesInput = document.createElement("input");
    notesInput.type = "text";
    notesInput.id = "notesInput";
    form.appendChild(notesInput)

    let priorityContainer = document.createElement("div");
    priorityContainer.id = "priorityContainer";
    form.appendChild(priorityContainer)

    let labelPriority = document.createElement("label");
    labelPriority.textContent = "Priority";
    labelPriority.for = "priorityInput";
    priorityContainer.appendChild(labelPriority);

    let priorityInput = document.createElement("input");
    priorityInput.type = "checkbox";
    priorityInput.id = "priorityInput";
    priorityContainer.appendChild(priorityInput); 

    let div = document.createElement("div");
    div.id= "btnsContainer";
    form.appendChild(div);

    let createBtn = document.createElement("button");
    createBtn.type = "button";
    createBtn.id = "createTaskBtn";
    createBtn.textContent = "Create";
    div.appendChild(createBtn)

    let cancelBtn = document.createElement("button");
    cancelBtn.type = "button";
    cancelBtn.id = "cancelTaskBtn";
    cancelBtn.textContent = "Cancel";
    div.appendChild(cancelBtn);

    cancelBtn.addEventListener("click", () => {
        taskCreator.remove();
        addTaskComponent();
    })
}

let trialTask = taskFactory("Drive", "G", "2022-11-11", true, true);
console.log(trialTask)

const taskComponent = (taskObject) => {
    let taskContainer = document.createElement("div");
    document.getElementById("currentProject").insertBefore(taskContainer, document.getElementById("addTask"));

    let essentialInfo = document.createElement("div");
    essentialInfo.id = "taskEssentialInfo"
    taskContainer.appendChild(essentialInfo);

    let taskName = document.createElement("p");
    taskName.textContent = taskObject.name;
    essentialInfo.appendChild(taskName);

    let rightSideEssentialInfo = document.createElement("div");
    rightSideEssentialInfo.id = "taskRightSideEssentialInfo";
    essentialInfo.appendChild(rightSideEssentialInfo);

    let dueDateInfo = document.createElement("p");
    dueDateInfo.textContent = taskObject.dueDate;
    rightSideEssentialInfo.appendChild(dueDateInfo);

    let eliminateTask = new Image();
    eliminateTask.src = closeSymbol;
    eliminateTask.classList.add("projectIcon");
    rightSideEssentialInfo.appendChild(eliminateTask);
}

const currentProjectComponent = () => {
    currentProjectName();
    addTaskComponent();
}

currentProjectComponent()

taskComponent(trialTask);