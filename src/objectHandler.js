// Set up task factory
const taskFactory = (name, description, dueDate, priority, completed = false) => {
    return {name, description, dueDate, priority, completed}
}

// Set up project factory 
const projectFactory = (name) => {
    let tasks = []; 
    return {name, tasks, addTask(newtask){this.tasks.push(newtask);}, removeTask(exTask){this.tasks = this.tasks.filter(task => task.name != exTask.name)} }
}

// create default projects 
let inbox = projectFactory("Inbox");

let activeProjectObject  = {
    project: inbox, 
    changeActiveProject(newActiveProject){
        this.project = newActiveProject;
    },
    defaultActiveProject(){
        this.project = inbox;
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