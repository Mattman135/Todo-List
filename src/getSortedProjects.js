export default function getSortedProjects() {
    const sortedProjects = [];
    const propertyNames = Object.getOwnPropertyNames(localStorage);

    for (let i=0; i < localStorage.length; i++) {
        let Title = propertyNames[i];
        let project = JSON.parse(localStorage.getItem(Title));
        //console.log(project);
        //console.log(project.priority == 4);
        if (project.priority == 1) {
            sortedProjects.push(project);
        }
    }
    for (let i=0; i < localStorage.length; i++) {
        let Title = propertyNames[i];
        let project = JSON.parse(localStorage.getItem(Title));
        if (project.priority == 2) {
            sortedProjects.push(project);
        }
    }
    for (let i=0; i < localStorage.length; i++) {
        let Title = propertyNames[i];
        let project = JSON.parse(localStorage.getItem(Title));
        if (project.priority == 3) {
            sortedProjects.push(project);
        }
    }
    for (let i=0; i < localStorage.length; i++) {
        let Title = propertyNames[i];
        let project = JSON.parse(localStorage.getItem(Title));
        if (project.priority == 4) {
            sortedProjects.push(project);
        }
    }
    return sortedProjects;
};