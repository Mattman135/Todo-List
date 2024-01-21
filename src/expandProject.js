import removeAllChildNodes from "./removeAllChildNodes"
import updateTitleAndDate from "./updateTitleAndDate"
import runHomeTab from "./runHomeTab"

export default function expandProject(
  title,
  description,
  dueDate,
  priority,
  todoListItems
) {
  removeAllChildNodes(document.getElementById("right-content"))
  updateTitleAndDate(title)
  const project = JSON.parse(localStorage.getItem(title))

  //
  const Header = document.createElement("div")
  Header.classList.add("Header")
  Header.innerHTML = `Title: ${title} - Description: ${description} - Due date: ${dueDate} - Priority: ${priority}`
  //
  const todoListandNotes = document.createElement("div")
  todoListandNotes.classList.add("todoListandNotes")

  // todo list
  const todoList = document.createElement("div")
  todoList.classList.add("todoList")

  const todoListInputContainer = document.createElement("div")
  todoListInputContainer.classList.add("todoListInputContainer")
  const todoListInput = document.createElement("input")
  todoListInput.type = "text"
  todoListInput.placeholder = "Add a todo item"
  const todoListInputBtn = document.createElement("button")
  todoListInputBtn.innerHTML = "+"

  todoListInputContainer.appendChild(todoListInput)
  todoListInputContainer.appendChild(todoListInputBtn)

  todoList.appendChild(todoListInputContainer)

  const listItemsContainer1 = document.createElement("div")
  listItemsContainer1.classList.add("listItemsContainer1")
  listItemsContainer1.id = "listItemsContainer1"
  todoList.appendChild(listItemsContainer1)

  displayTodoList()

  todoListInputBtn.addEventListener("click", (e) => {
    e.preventDefault()
    addTodoItem()
  })

  // notes
  const Notes = document.createElement("div")
  Notes.classList.add("Notes")

  const notesInputContainer = document.createElement("div")
  notesInputContainer.classList.add("todoListInputContainer")
  const notesInput = document.createElement("input")
  notesInput.type = "text"
  notesInput.placeholder = "Add a note"
  const notesInputBtn = document.createElement("button")
  notesInputBtn.innerHTML = "+"

  notesInputContainer.appendChild(notesInput)
  notesInputContainer.appendChild(notesInputBtn)

  const notesUL = document.createElement("ul")
  notesUL.classList.add("notesUL")
  notesUL.id = "notesUL"

  Notes.appendChild(notesInputContainer)
  Notes.appendChild(notesUL)

  displayNotes()

  notesInputBtn.addEventListener("click", (e) => {
    e.preventDefault()
    addNote()
  })

  //
  todoListandNotes.appendChild(todoList)
  todoListandNotes.appendChild(Notes)

  // delete project button
  const deleteBtn = document.createElement("button")
  deleteBtn.classList.add("deleteBtn")
  deleteBtn.innerHTML = "Delete project"
  deleteBtn.addEventListener("click", (e) => {
    e.preventDefault()
    localStorage.removeItem(title)
    runHomeTab()
  })

  //
  document.getElementById("right-content").appendChild(Header)
  document.getElementById("right-content").appendChild(todoListandNotes)
  document.getElementById("right-content").appendChild(deleteBtn)

  // functions
  function displayTodoList() {
    if (listItemsContainer1.childNodes.length != 0) {
      removeAllChildNodes(document.getElementById("listItemsContainer1"))
    }
    for (let i = 0; i < project.todoListItems.length; i++) {
      let listItemInput = document.createElement("input")
      listItemInput.classList.add("checkboxInput")
      listItemInput.type = "checkbox"
      listItemInput.name = project.todoListItems[i]

      let listItemLabel = document.createElement("label")
      listItemLabel.innerHTML = project.todoListItems[i]
      listItemLabel.for = project.todoListItems[i]

      let listItemDiv = document.createElement("div")
      listItemDiv.classList.add("listItemDiv")
      listItemDiv.appendChild(listItemInput)
      listItemDiv.appendChild(listItemLabel)

      listItemsContainer1.appendChild(listItemDiv)
    }
  }

  function addTodoItem() {
    if (todoListInput.value == "") return
    project.todoListItems.push(todoListInput.value)
    localStorage.setItem(title, JSON.stringify(project))
    displayTodoList()
    todoListInput.value = ""
  }

  function displayNotes() {
    if (project.notes == undefined) return
    if (notesUL.childNodes.length != 0) {
      removeAllChildNodes(document.getElementById("notesUL"))
    }
    for (let i = 0; i < project.notes.length; i++) {
      let notesLI = document.createElement("li")
      notesLI.innerHTML = project.notes[i]
      notesUL.appendChild(notesLI)
    }
  }

  function addNote() {
    if (project["notes"] == undefined) {
      project["notes"] = []
    }
    project.notes.push(notesInput.value)
    localStorage.setItem(title, JSON.stringify(project))
    //console.log(project)
    displayNotes()
    notesInput.value = ""
  }
}
