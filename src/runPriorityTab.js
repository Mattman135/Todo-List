import removeAllChildNodes from "./removeAllChildNodes"
import updateTitleAndDate from "./updateTitleAndDate"
import getSortedProjects from "./getSortedProjects"
import expandProject from "./expandProject"

export default function runPriorityTab() {
  removeAllChildNodes(document.getElementById("right-content"))
  updateTitleAndDate("Priority")
  const sortedProjects = getSortedProjects()
  //console.log(sortedProjects);

  //console.log(sortedProjects);
  let N = sortedProjects.length

  if (N === 0) {
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

  for (let i = 0; i < N; i++) {
    let projectContainer = document.createElement("div")
    projectContainer.classList.add("projectContainer")
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    let p4 = document.createElement("p")

    let project = sortedProjects[i]
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
