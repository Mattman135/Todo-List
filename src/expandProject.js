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
  console.log(title, description, dueDate, priority, todoListItems)

  //
  const Header = document.createElement("div")
  Header.classList.add("Header")
  Header.innerHTML = `${title} ${description} ${dueDate} ${priority}`
  //
  const todoListandNotes = document.createElement("div")
  todoListandNotes.classList.add("todoListandNotes")
  const todoList = document.createElement("div")
  todoList.classList.add("todoList")

  todoList.innerHTML = "todo list"

  const Notes = document.createElement("div")
  Notes.classList.add("Notes")
  Notes.innerHTML = "notes"

  todoListandNotes.appendChild(todoList)
  todoListandNotes.appendChild(Notes)

  //
  document.getElementById("right-content").appendChild(Header)
  document.getElementById("right-content").appendChild(todoListandNotes)
}
