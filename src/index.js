// Everything in this file should only handle all you see on the first page and nothing else
import createForm from "./createForm";
import formIsValid from "./formIsValid";
import createProject from "./createProject";
import deleteForm from "./deleteForm";
import viewAllProjects from "./viewAllProjects";
import clearPageOfProjects from "./clearPageOfProjects";
import clearPageOfForm from "./clearPageOfForm";

const homeTabBtn = document.getElementById('homeTabBtn');
const todayTabBtn = document.getElementById('todayTabBtn');
const weekTabBtn = document.getElementById('weekTabBtn');
const priorityTabBtn = document.getElementById('priorityTabBtn');
const addProjectBtn = document.getElementById('addProjectBtn');
const tabTitle = document.getElementById('tabTitle');

addProjectBtn.addEventListener('click', () => {
    clearPageOfProjects();
    tabTitle.innerHTML = 'Add project';
    addProjectBtn.disabled = true;
    const todoListItems = [];
    createForm(todoListItems);
    const Form = document.getElementById('createProjectForm');
    const cancelBtn = document.getElementById('cancelBtn');

    allProjectsTabBtn.disabled = false;

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

            addProjectBtn.disabled = false;
            Form.reset();

        } else {
            alert('Please fill in the form correctly');
        }
    });

    //
    cancelBtn.addEventListener('click', () => {
        deleteForm();
        addProjectBtn.disabled = false;
    });
});

homeTabBtn.addEventListener('click', () => {
    tabTitle.innerHTML = 'Home';
});

todayTabBtn.addEventListener('click', () => {
    tabTitle.innerHTML = 'Today';
});

weekTabBtn.addEventListener('click', () => {
    tabTitle.innerHTML = 'Week';
});

priorityTabBtn.addEventListener('click', () => {
    tabTitle.innerHTML = 'Priority';
});

allProjectsTabBtn.addEventListener('click', () => {
    tabTitle.innerHTML = 'All projects';
    addProjectBtn.disabled = false;
    allProjectsTabBtn.disabled = true;
    clearPageOfForm();
    viewAllProjects();
});