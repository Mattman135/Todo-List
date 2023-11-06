// Everything in this file should only handle all you see on the first page and nothing else
import createForm from "./createForm";
import formIsValid from "./formIsValid";
import createProject from "./createProject";
import deleteForm from "./deleteForm";
import viewAllProjects from "./viewAllProjects";
import removeAllChildNodes from "./removeAllChildNodes";
import updateTitleAndDate from "./updateTitleAndDate";
import runHomeTab from "./runHomeTab";
import runTodaytab from "./runTodayTab";
import runWeekTab from "./runWeekTab";
import runPriorityTab from "./runPriorityTab";

const homeTabBtn = document.getElementById('homeTabBtn');
const todayTabBtn = document.getElementById('todayTabBtn');
const weekTabBtn = document.getElementById('weekTabBtn');
const priorityTabBtn = document.getElementById('priorityTabBtn');
const addProjectBtn = document.getElementById('addProjectBtn');
const tabTitle = document.getElementById('tabTitle');

addProjectBtn.addEventListener('click', () => {
    removeAllChildNodes(document.getElementById('right-content'));
    updateTitleAndDate('Add project');
    

    //
    const todoListItems = [];
    createForm(todoListItems);
    const Form = document.getElementById('createProjectForm');
    const cancelBtn = document.getElementById('cancelBtn');

    //
    Form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (formIsValid(title, description, dueDate, priority)) {

            //console.log('form is valid');
            let title = document.getElementById('title').value;
            let description = document.getElementById('description').value;
            let dueDate = document.getElementById('dueDate').value;
            let priority = document.getElementById('priority').value;
            let project = createProject(title, description, dueDate, priority, todoListItems);

            localStorage.setItem(`${title}`, JSON.stringify(project));

            //console.log(project);            
            Form.reset();

        } else {
            alert('Please fill in the form correctly');
        }
    });

    //
    cancelBtn.addEventListener('click', () => {
        deleteForm();
    });
});

homeTabBtn.addEventListener('click', () => {
    runHomeTab();
});

todayTabBtn.addEventListener('click', () => {
    runTodaytab();
});

weekTabBtn.addEventListener('click', () => {
    runWeekTab();
});

priorityTabBtn.addEventListener('click', () => {
    runPriorityTab();
});

allProjectsTabBtn.addEventListener('click', () => {
    viewAllProjects();
});

document.body.onload = runHomeTab();