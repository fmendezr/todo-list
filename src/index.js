import "./style.css";
import addSymbol from "./img/addIcon.svg";
import {format} from "date-fns";

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

const 

const createProjectsComponent = () => {
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
}


createProjectsComponent();