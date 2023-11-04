export default function clearPageOfForm() {
    if(!document.getElementById('createProjectForm')) {
        return;
    } else {
        document.getElementById('createProjectForm').remove();
    }
};