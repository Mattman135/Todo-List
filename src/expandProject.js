import removeAllChildNodes from "./removeAllChildNodes"
import updateTitleAndDate from "./updateTitleAndDate"

export default function expandProject(
  title,
  description,
  dueDate,
  priority,
  todoListItems
) {
  removeAllChildNodes(document.getElementById("right-content"))
  updateTitleAndDate(title)

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
  todoList.appendChild(listItemsContainer1)

  todoListInputBtn.addEventListener("click", (e) => {
    e.preventDefault()
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

    listItemsContainer1.appendChild(listItemDiv)
    todoListInput.value = ""
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

  Notes.appendChild(notesInputContainer)

  //
  todoListandNotes.appendChild(todoList)
  todoListandNotes.appendChild(Notes)

  //
  document.getElementById("right-content").appendChild(Header)
  document.getElementById("right-content").appendChild(todoListandNotes)
}
