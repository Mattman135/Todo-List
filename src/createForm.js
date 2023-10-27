import createProject from "./createProject";
import deleteForm from "./deleteForm";
import checkForm from "./checkForm";
import { compareAsc, format, isDate, isValid } from "date-fns";


function createForm() {
    const Form = document.createElement('form');
    Form.id = 'createProjectForm';

    const title = document.createElement('input');
    title.id = 'title';
    title.type = 'text';
    title.placeholder = 'Title';

    const description = document.createElement('input');
    description.id = 'description';
    description.type = 'text';
    description.placeholder = 'Description';


    // date input
    const formDiv1 = document.createElement('div');
    formDiv1.classList.add('formDiv1');
    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.id = 'dueDate';
    dueDate.min = '2000-01-01';
    dueDate.max = '2030-01-01';
    dueDate.placeholder = 'Choose date: yyyy-mm-dd';

    formDiv1.appendChild(dueDate);

    // priority form
    const priority = document.createElement('select');
    priority.id = 'priority';
    priority.name = 'Priority';

    const priority1 = document.createElement('option');
    priority1.value = '1';
    priority1.innerHTML = '🟥 Priority 1';

    const priority2 = document.createElement('option');
    priority2.value = '2';
    priority2.innerHTML = '🟧 Priority 2';

    const priority3 = document.createElement('option');
    priority3.value = '3';
    priority3.innerHTML = '🟩 Priority 3';

    const priority4 = document.createElement('option');
    priority4.value = '4';
    priority4.innerHTML = '◻️ Priority 4';

    priority.appendChild(priority1);
    priority.appendChild(priority2);
    priority.appendChild(priority3);
    priority.appendChild(priority4);
    formDiv1.appendChild(priority);

    //
    const formDiv2 = document.createElement('div');
    formDiv2.classList.add('formDiv2');
    const addBtn = document.createElement('button');
    addBtn.type = 'submit';
    addBtn.innerHTML = 'Add project';

    formDiv2.appendChild(addBtn);


    // add all elements to the form
    Form.appendChild(title);
    Form.appendChild(description);
    Form.appendChild(formDiv1);
    Form.appendChild(formDiv2);


    //
    const rightContent = document.getElementById('right-content');
    rightContent.appendChild(Form);

    //
    Form.addEventListener('submit', (e) => {
        e.preventDefault();
        let title = document.getElementById('title');
        let description = document.getElementById('description');
        
        // date
        let dueDate = document.getElementById('dueDate')
        console.log(dueDate.value);
        
        //
        let priority = document.getElementById('priority');

        // check so that the form is completed
        checkForm(title, description, dueDate, priority);

        //
    });
}

export default createForm;