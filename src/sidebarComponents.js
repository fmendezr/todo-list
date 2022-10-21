import addSymbol from "./img/addIcon.svg";
import closeSymbol from "./img/closeIcon.svg";
import customProjectSymbol from "./img/customProjectIcon.svg";
import {projectFactory} from "./factories.js";

// default active project 
const inbox = projectFactory("Inbox")

//variables
let activeProject = inbox;
let customProjectArr = []

// sidebar components 


const entireCustomProjectsComponents = () => {
document.querySelectorAll(".customProjectContainer").forEach(element => { element.remove(); });
    customProjectArr.forEach(project => {
        customProjectComponent(project);
    })
}

const customProjectComponent = (project) => {
    let div = document.createElement("div");
    div.classList.add("customProjectContainer");
    div.id = project.name;
    document.getElementById("customProjects").insertBefore(div, document.getElementById("addProject"));

    div.addEventListener("click", () => {
        activeProject = project;
    })

    let leftSide = document.createElement("div");
    leftSide.classList.add("leftSideCustomProject")
    div.appendChild(leftSide);
    
    let img = new Image();
    img.src = customProjectSymbol;
    img.classList.add("projectIcon");
    leftSide.appendChild(img);

    let name = document.createElement("p");
    name.classList.add("customProjectName");
    name.textContent = project.name;
    leftSide.appendChild(name);

    let rightSide = document.createElement("div");
    rightSide.classList.add("rightSideCustomProject");
    div.appendChild(rightSide)

    let deleteCustomProjectBtn = new Image();
    deleteCustomProjectBtn.src = closeSymbol;
    deleteCustomProjectBtn.classList.add("projectIcon");
    rightSide.appendChild(deleteCustomProjectBtn);

    deleteCustomProjectBtn.addEventListener("click", (event) => {
        event.stopPropagation();
       customProjectArr = customProjectArr.filter(customProject => customProject.name != project.name);
       entireCustomProjectsComponents();
    })
}

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

    createBtn.addEventListener("click", () => {
        if (customProjectArr.some(element => element.name == newProjectName.value)){
            alert("This custom project already exists")
        } else {
            let newProject = projectFactory(newProjectName.value)
            customProjectArr.push(newProject);
            projectCreator.remove();
            createProjectComponent();
            entireCustomProjectsComponents()
        }
    })
}

export {createProjectComponent, expandedCreateProjectComponent, activeProject};