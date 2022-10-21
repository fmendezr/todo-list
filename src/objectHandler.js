import {projectFactory} from "./factories";

let inbox = projectFactory("Inbox");

let activeProjectObject = {
    project: inbox, 
    changeActiveProject(newActiveProject){
        this.changeActiveProject = newActiveProject;
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

export {activeProjectObject, customProjectsObject}