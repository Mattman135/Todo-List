// Everything in this file should only handle all you see on the first page and nothing else
import createForm from "./createForm";
import formIsValid from "./formIsValid";
import createProject from "./createProject";
import deleteForm from "./deleteForm";

const addProjectBtn = document.getElementById('addProjectBtn');
const projectList = [];


addProjectBtn.addEventListener('click', () => {
    addProjectBtn.disabled = true;
    createForm();
    const Form = document.getElementById('createProjectForm');
    const cancelBtn = document.getElementById('cancelBtn');
    
    //
    Form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (formIsValid(title, description, dueDate, priority)) {

            console.log('form is valid');
            let title = document.getElementById('title').value;
            let description = document.getElementById('description').value;
            let dueDate = document.getElementById('dueDate').value;
            let priority = document.getElementById('priority').value;
            let project = createProject(title, description, dueDate, priority);
            console.log(project);
            addProjectBtn.disabled = false;
            projectList.push(project);
            console.log("project list", projectList);
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




