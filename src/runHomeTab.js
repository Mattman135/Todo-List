import removeAllChildNodes from "./removeAllChildNodes"
import updateTitleAndDate from "./updateTitleAndDate"
import expandProject from "./expandProject"

export default function runHomeTab() {
  removeAllChildNodes(document.getElementById("right-content"))
  updateTitleAndDate("Home")
  let numberOfProjects

  //
  if (localStorage.length === 0) {
    const noProjects = document.createElement("p")
    noProjects.classList.add("noProjects")
    noProjects.innerHTML = "You have no current projects"
    const rightContent = document.getElementById("right-content")
    rightContent.appendChild(noProjects)
    return
  }

  //
  numberOfProjects = localStorage.length
  const allProjectsContainer = document.createElement("div")
  allProjectsContainer.classList.add("allProjectsContainer")
  allProjectsContainer.id = "allProjectsContainer"
  const rightContent = document.getElementById("right-content")
  rightContent.appendChild(allProjectsContainer)

  //
  const propertyNames = Object.getOwnPropertyNames(localStorage)
  for (let i = 0; i < numberOfProjects; i++) {
    let projectContainer = document.createElement("div")
    projectContainer.classList.add("projectContainer")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")

    let Title = propertyNames[i]
    let project = JSON.parse(localStorage.getItem(Title))
    p1.innerHTML = `Title: ${project.title}`
    p2.innerHTML = `Description: ${project.description}`
    p3.innerHTML = `Due date: ${project.dueDate}`
    p4.innerHTML = `Priority: ${project.priority}`

    projectContainer.id = project.title
    projectContainer.appendChild(p1)
    projectContainer.appendChild(p2)
    projectContainer.appendChild(p3)
    projectContainer.appendChild(p4)

    projectContainer.addEventListener("click", () =>
      expandProject(
        project.title,
        project.description,
        project.dueDate,
        project.priority,
        project.todoListItems
      )
    )

    allProjectsContainer.appendChild(projectContainer)
  }
}
