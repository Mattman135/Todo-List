import createProject from "./createProject";



function createModal () {
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".overlay");
    const openModalBtn = document.querySelector("#addBtnli");
    const closeModalBtn = document.querySelector(".btn-close");

    const openModal = function () {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
    };

    const closeModal = function () {
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    };

    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener("click", closeModal);
}

export default createModal;