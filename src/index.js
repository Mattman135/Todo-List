import createProject from "./createProject";
import createModal from "./modal";

const addBtn = document.querySelector('#addBtnli');
addBtn.addEventListener('click', () => {
    createModal();
})

const title = "test";
const description = "this is a test description";
const dueDate = "Hurry, due date is tomorrow";
const priority = 1;
const note = "note";
const checklist = "this is a checklist";
const project = createProject(title, description, dueDate, priority, note, checklist);
console.log(project);
console.log(project.checklist);