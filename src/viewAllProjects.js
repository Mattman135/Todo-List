import removeAllChildNodes from "./removeAllChildNodes"
import updateTitleAndDate from "./updateTitleAndDate"

export default function viewAllProjects() {
  removeAllChildNodes(document.getElementById("right-content"))
  updateTitleAndDate("All projects")

  //
  if (localStorage.length == 0) {
    const noProjects = document.createElement("p")
    noProjects.classList.add("noProjects")
    noProjects.innerHTML = "You have no current projects"
    const rightContent = document.getElementById("right-content")
    rightContent.appendChild(noProjects)
    return
  }

  const allProjectsContainer = document.createElement("div")
  allProjectsContainer.classList.add("allProjectsContainer")
  allProjectsContainer.id = "allProjectsContainer"
  const rightContent = document.getElementById("right-content")
  rightContent.appendChild(allProjectsContainer)

  //
  const propertyNames = Object.getOwnPropertyNames(localStorage)
  for (let i = 0; i < propertyNames.length; i++) {
    let projectContainer = document.createElement("div")
    projectContainer.classList.add("projectContainer")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")
    let p5 = document.createElement("p")

    let Title = propertyNames[i]
    let project = JSON.parse(localStorage.getItem(Title))
    p1.innerHTML = `Title: ${project.title}`
    p2.innerHTML = `Description: ${project.description}`
    p3.innerHTML = `Due date: ${project.dueDate}`
    p4.innerHTML = `Priority: ${project.priority}`
    p5.innerHTML = `Todo list: ${project.todoListItems}`

    projectContainer.id = project.title
    projectContainer.appendChild(p1)
    projectContainer.appendChild(p2)
    projectContainer.appendChild(p3)
    projectContainer.appendChild(p4)
    projectContainer.appendChild(p5)

    // delete button
    const deleteBtn = document.createElement("button")
    deleteBtn.type = "button"
    deleteBtn.innerHTML = "🗑️"
    deleteBtn.addEventListener("click", () => {
      localStorage.removeItem(project.title)
      document.getElementById(project.title).remove()
    })

    projectContainer.appendChild(deleteBtn)

    allProjectsContainer.appendChild(projectContainer)
  }
}
