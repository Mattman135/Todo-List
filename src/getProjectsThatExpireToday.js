export default function getProjectsThatExpireToday() {
  const projectsThatExpireToday = []
  let date = new Date()
  let day = date.getDate()
  if (day < 10) {
    day = `0${day}`
  } // prevents syntax error
  date = `${date.getFullYear()}-${date.getMonth() + 1}-${day}`

  const propertyNames = Object.getOwnPropertyNames(localStorage)
  for (let i = 0; i < localStorage.length; i++) {
    let Title = propertyNames[i]
    let project = JSON.parse(localStorage.getItem(Title))
    //console.log(project.dueDate);
    //console.log(date);
    if (date === project.dueDate) {
      projectsThatExpireToday.push(project)
    }
  }
  return projectsThatExpireToday
}
