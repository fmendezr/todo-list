import "./style.css";

// Set up factories 
const taskFactory = (name, description, dueDate, priority, notes, completed) => {
    return {name, description, dueDate, priority, notes, completed}
}

const projectFactory = (name) => {
    let tasks = []
    return {name, tasks}
}

// Create default projects 
const inboxProject = projectFactory("Inbox");
