export default function createForm(todoListItems) {
  const Form = document.createElement("form")
  Form.id = "createProjectForm"

  const title = document.createElement("input")
  title.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  })
  title.id = "title"
  title.type = "text"
  title.placeholder = "Title"

  const description = document.createElement("input")
  description.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  })
  description.id = "description"
  description.type = "text"
  description.placeholder = "Description"

  // date input
  const formDiv1 = document.createElement("div")
  formDiv1.classList.add("formDiv1")
  const dueDate = document.createElement("input")
  dueDate.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  })
  dueDate.type = "date"
  dueDate.id = "dueDate"
  dueDate.min = "2000-01-01"
  dueDate.max = "2030-01-01"
  dueDate.placeholder = "Choose date: yyyy-mm-dd"

  formDiv1.appendChild(dueDate)

  // priority form
  const priority = document.createElement("select")
  priority.id = "priority"
  priority.name = "priority"

  const priority1 = document.createElement("option")
  priority1.value = "1"
  priority1.innerHTML = "🟥 Priority 1"

  const priority2 = document.createElement("option")
  priority2.value = "2"
  priority2.innerHTML = "🟧 Priority 2"

  const priority3 = document.createElement("option")
  priority3.value = "3"
  priority3.innerHTML = "🟩 Priority 3"

  const priority4 = document.createElement("option")
  priority4.value = "4"
  priority4.innerHTML = "◻️ Priority 4"

  priority.appendChild(priority1)
  priority.appendChild(priority2)
  priority.appendChild(priority3)
  priority.appendChild(priority4)
  formDiv1.appendChild(priority)

  // todo list
  //const todoListItems = [];
  const formDiv2 = document.createElement("div")
  formDiv2.classList.add("formDiv2")

  const todoListInputContainer = document.createElement("div")
  todoListInputContainer.classList.add("todoListInputContainer")
  const todoListInput = document.createElement("input")
  todoListInput.type = "text"
  todoListInput.placeholder = "Add a todo item"
  const todoListInputBtn = document.createElement("button")
  todoListInputBtn.innerHTML = "+"

  todoListInputContainer.appendChild(todoListInput)
  todoListInputContainer.appendChild(todoListInputBtn)

  todoListInputBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(todoListInput.value)
    todoListItems.push(todoListInput.value)

    let listItemInput = document.createElement("input")
    listItemInput.type = "checkbox"
    listItemInput.name = todoListInput.value

    let listItemLabel = document.createElement("label")
    listItemLabel.innerHTML = todoListInput.value
    listItemLabel.for = todoListInput.value

    let listItemDiv = document.createElement("div")
    listItemDiv.classList.add("listItemDiv")
    listItemDiv.appendChild(listItemInput)
    listItemDiv.appendChild(listItemLabel)

    formDiv2.appendChild(listItemDiv)
  })

  formDiv2.appendChild(todoListInputContainer)

  //
  const formDiv3 = document.createElement("div")
  formDiv3.classList.add("formDiv3")

  const addBtn = document.createElement("button")
  addBtn.type = "submit"
  addBtn.innerHTML = "Add project"

  const cancelBtn = document.createElement("button")
  cancelBtn.type = "button"
  cancelBtn.id = "cancelBtn"
  cancelBtn.innerHTML = "Cancel"

  formDiv3.appendChild(cancelBtn)
  formDiv3.appendChild(addBtn)

  // add all elements to the form
  Form.appendChild(title)
  Form.appendChild(description)
  Form.appendChild(formDiv1)
  Form.appendChild(formDiv2)
  Form.appendChild(formDiv3)

  //
  const rightContent = document.getElementById("right-content")
  rightContent.appendChild(Form)
}
