import addSymbol from "./img/addIcon.svg";
import closeSymbol from "./img/closeIcon.svg";
import expandSymbol from "./img/arrowUpIcon.svg";
import unexpandSymbol from "./img/arrowDownIcon.svg";

// current project components 

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

const taskComponent = (taskObject) => {
    let taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    document.getElementById("currentProject").insertBefore(taskContainer, document.getElementById("addTask"));

    let essentialInfo = document.createElement("div");
    essentialInfo.classList.add("taskEssentialInfo");
    taskContainer.appendChild(essentialInfo);

    let leftSideEssentialInfo = document.createElement("div");
    leftSideEssentialInfo.classList.add("taskLeftSideEssentialInfo");
    essentialInfo.appendChild(leftSideEssentialInfo)

    let taskName = document.createElement("p");
    taskName.textContent = taskObject.name;
    leftSideEssentialInfo.appendChild(taskName);

    let expandBtn = new Image();
    expandBtn.src = expandSymbol;
    expandBtn.classList.add("projectIcon");
    leftSideEssentialInfo.appendChild(expandBtn);

    expandBtn.addEventListener("click", () => {
        expandedTaskComponent(taskObject, taskContainer, expandBtn, leftSideEssentialInfo);
    })

    let rightSideEssentialInfo = document.createElement("div");
    rightSideEssentialInfo.classList.add("taskRightSideEssentialInfo");
    essentialInfo.appendChild(rightSideEssentialInfo);

    let dueDateInfo = document.createElement("p");
    dueDateInfo.textContent = taskObject.dueDate;
    rightSideEssentialInfo.appendChild(dueDateInfo);

    let eliminateTask = new Image();
    eliminateTask.src = closeSymbol;
    eliminateTask.classList.add("projectIcon");
    rightSideEssentialInfo.appendChild(eliminateTask);
}

const expandedTaskComponent = (taskObject, container, expandBtn, leftSideEssentialInfo) => {
    let expandedData = document.createElement("div");
    container.appendChild(expandedData);

    let description = document.createElement("p");
    description.classList.add("descriptionTask");
    description.textContent = `Description: ${taskObject.description}`;
    expandedData.appendChild(description);

    let unexpandBtn = new Image();
    unexpandBtn.src = unexpandSymbol;
    unexpandBtn.classList.add("projectIcon");
    leftSideEssentialInfo.replaceChild(unexpandBtn, expandBtn);

    unexpandBtn.addEventListener("click", () => {
        expandedData.remove();
        leftSideEssentialInfo.replaceChild(expandBtn, unexpandBtn);
    })
}

const currentProjectComponent = () => {
    currentProjectName();
    addTaskComponent();
}


export {currentProjectName, addTaskComponent, taskComponent, currentProjectComponent};