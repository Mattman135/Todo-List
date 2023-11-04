export default function clearPageOfProjects() {
    if (!document.getElementById('allProjectsContainer')) {
        return;
    } else {
        const allProjectsContainer = document.getElementById('allProjectsContainer');
        allProjectsContainer.remove();
    }
};