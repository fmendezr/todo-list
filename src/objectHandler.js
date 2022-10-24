import intervalToDuration from 'date-fns/intervalToDuration'

// Set up task factory

const taskFactory = (name, description, dueDate, priority, completed = false) => {
    return {name, description, dueDate, priority, completed}
}

// Set up project factory 

const projectFactory = (name) => {
    let tasks = []; 
    return {name, tasks, addTask(newtask){this.tasks.push(newtask)}, removeTask(exTask){this.tasks = this.tasks.filter(task => task.name != exTask.name)}}
}

// create default projects 

let inbox = projectFactory("Inbox");
let today = projectFactory("Today");
let thisWeek = projectFactory("This Week");

//add methods for updating objects

today.updateArray = () => {
    let date = new Date();
    let formattedDate = date.getFullYear() + "-" + ( date.getMonth() +1) + "-" + date.getDate();
    today.tasks = inbox.tasks.filter(task => task.dueDate == formattedDate);
}

thisWeek.updateArray = () => {
    let intervalCalc = (date) => {
        let parts = date.split("-"); 
        return intervalToDuration({
        start: new Date(),
        end: new Date(parseInt(parts[0]), parseInt(parts[1])-1, parseInt(parts[2]), 0, 0, 0)
       })
    }
    thisWeek.tasks = [];
    for (let i = 0; i < inbox.tasks.length; i++){
        if (inbox.tasks[i].dueDate != ''){
            if (intervalCalc(inbox.tasks[i].dueDate).days <= 7){
                thisWeek.tasks.push(inbox.tasks[i]);
            }
        }
    }
}


// other stuff

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

export {activeProjectObject, customProjectsObject, projectFactory, taskFactory, today, inbox, thisWeek}