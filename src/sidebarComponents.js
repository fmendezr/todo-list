import addSymbol from "./img/addIcon.svg";
import closeSymbol from "./img/closeIcon.svg";
import customProjectSymbol from "./img/customProjectIcon.svg";
import {projectFactory} from "./factories.js";

// sidebar components 

const customProjectComponent = (project) => {
    let div = document.createElement("div");
    div.classList.add("customProjectContainer");
    document.getElementById("customProjects").insertBefore(div, document.getElementById("addProject"))

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
    
    createBtn.addEventListener("click", () => {
        project = projectFactory(newProjectName.value);
        createBtn.textContent = project.name
    })
    })
}

export {customProjectComponent, createProjectComponent, expandedCreateProjectComponent}