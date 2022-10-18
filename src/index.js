import "./style.css";
import {currentProjectName,addTaskComponent , taskComponent, currentProjectComponent} from "./currentProjectComponents.js";
import {customProjectComponent, createProjectComponent} from "./sidebarComponents.js"
import { taskFactory, projectFactory} from "./factories.js";
import {add, format} from "date-fns";

// make sidebar adjust base on view width
document.getElementById("sidebarTogglerMobile").addEventListener("click", () => {
    if(window.innerWidth <= 461){
        if(document.getElementById("sidebar").classList.contains("active")){
            document.getElementById("sidebar").classList.remove("active");
        } else {
            document.getElementById("sidebar").classList.add("active");
        }     
    }
})

// default projects 
const inbox = projectFactory("inbox")

// active project variable 
var activeProject = inbox;

// custom projects
let customProjectsArr = [];

// default render 
createProjectComponent();
currentProjectComponent();

// testing and stuff 
let trialTask = taskFactory("Drive", "G", "2022-11-11", true, true);
console.log(trialTask)
let trialProject = projectFactory("trial");
console.log(trialProject.name);

taskComponent(trialTask);
taskComponent(trialTask);

customProjectComponent(trialProject);

