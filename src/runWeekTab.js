import removeAllChildNodes from "./removeAllChildNodes"
import updateTitleAndDate from "./updateTitleAndDate"
import getProjectsThatExpireThisWeek from "./getProjectsThatExpireThisWeek"
import expandProject from "./expandProject"

export default function runWeekTab() {
  removeAllChildNodes(document.getElementById("right-content"))
  updateTitleAndDate("Week")

  const projectsThatExpireThisWeek = getProjectsThatExpireThisWeek()
  //console.log(projectsThatExpireThisWeek);

  //
  let N = projectsThatExpireThisWeek.length

  if (N === 0) {
    const noProjects = document.createElement("p")
    noProjects.classList.add("noProjects")
    noProjects.innerHTML = "You have no current projects that expires this week"
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

    let project = projectsThatExpireThisWeek[i]
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
