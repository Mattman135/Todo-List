// Everything in this file should only handle all you see on the first page and nothing else

import createProject from "./createProject";
import createForm from "./createForm";

const addProjectBtn = document.getElementById('addProjectBtn');
addProjectBtn.addEventListener('click', () => {
    createForm();
    addProjectBtn.disabled = true;
})