function deleteForm() {
    const rightContent = document.getElementById('right-content');
    const Form = document.querySelector('form');
    
    rightContent.removeChild(Form);
}

export default deleteForm;