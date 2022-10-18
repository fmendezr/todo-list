// Set up task factory
const taskFactory = (name, description, dueDate, priority, completed = false) => {
    return {name, description, dueDate, priority, completed}
}

// Set up project factory 
const projectFactory = (name) => {
    let tasks = []
    return {name, tasks}
}

export {taskFactory, projectFactory}