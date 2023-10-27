function checkForm(title, description, dueDate, priority) {
    if ((title.value !== '') && (description.value !== '') && (dueDate.value !== '') && (priority.value !== '')) {
        let project = createProject(title.value, description.value, dueDate.value, priority.value);
        console.log(project);
        deleteForm();
    } else {
        alert('Please fill in the form correctly');
    }
}

export default checkForm;