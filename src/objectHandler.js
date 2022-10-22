// Set up task factory
const taskFactory = (name, description, dueDate, priority, completed = false) => {
    return {name, description, dueDate, priority, completed}
}

// Set up project factory 
const projectFactory = (name) => {
    let tasks = [] 
    const addTask = (newtask) => {
        this.tasks.push(newtask);
    }
    const removeTask = (exTask) => {
        this.tasks = this.tasks.filter(task => task.name != exTask)
    }
    return {name, tasks, addTask, removeTask }
}

// create default projects 
let inbox = projectFactory("Inbox");

let activeProjectObject  = {
    project: inbox, 
    changeActiveProject(newActiveProject){
        this.project = newActiveProject;
    }
}
let customProjectsObject =  {
    arr: [],
    addCustomProject(newsCustomProject){
        this.arr.push(newsCustomProject);
    },
    removeCustomProject(project){
        this.arr = this.arr.filter(customProject => customProject.name != project.name)
    }
};

export {activeProjectObject, customProjectsObject, projectFactory, taskFactory}