import "./style.css";
import {currentProjectComponent} from "./currentProjectComponents.js";
import {createProjectComponent} from "./sidebarComponents.js";
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

// default render 
createProjectComponent();
currentProjectComponent();

