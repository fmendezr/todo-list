import "./style.css";
import addSymbol from "./img/addIcon.svg";
import {add, format} from "date-fns";

// Set up factories 
const taskFactory = (name, description, dueDate, priority, notes, completed) => {
    return {name, description, dueDate, priority, notes, completed}
}

const projectFactory = (name) => {
    let tasks = []
    return {name, tasks}
}

// set up default functions 
const inbox = projectFactory("inbox")
const btn = document.getElementById("btn");
const input = document.getElementById("dueDate");

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

    let labelPriority = document.createElement("label");
    labelPriority.textContent = "Priority";
    labelPriority.for = "priorityInput";
    form.appendChild(labelPriority);

    let priorityInput = document.createElement("input");
    priorityInput.type = "checkbox";
    priorityInput.id = "priorityInput";
    form.appendChild(priorityInput); 
}

const currentProjectComponent = () => {
    currentProjectName();
    addTaskComponent();
}

currentProjectComponent()
expandedAddTaskComponent();