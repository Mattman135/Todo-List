import createProject from "./createProject";
import deleteForm from "./deleteForm";

function checkForm(title, description, dueDate, priority) {
    if ((title.value !== '') && (description.value !== '') && (dueDate.value !== '') && (priority.value !== '')) {
        let project = createProject(title.value, description.value, dueDate.value, priority.value);
        deleteForm();
    } else {
        alert('Please fill in the form correctly');
    }
}

export default checkForm;