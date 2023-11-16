import calculateWeekNumber from "./calculateWeekNumber"

export default function getProjectsThatExpireThisWeek() {
  const projectsThatExpireThisWeek = []
  let date = new Date()
  var weekToday = calculateWeekNumber(date)
  var projectWeek
  //console.log('Date:' + date);
  //console.log('date.getFullYear()' + date.getFullYear());
  //console.log('Week today: ' + weekToday);

  //
  const propertyNames = Object.getOwnPropertyNames(localStorage)
  for (let i = 0; i < localStorage.length; i++) {
    let Title = propertyNames[i]
    let project = JSON.parse(localStorage.getItem(Title))
    //console.log('Date: ' + project.dueDate + ' and week: ' + calculateWeekNumber(new Date(project.dueDate)));
    projectWeek = calculateWeekNumber(new Date(project.dueDate))

    if (weekToday === projectWeek) {
      projectsThatExpireThisWeek.push(project)
    }
  }
  return projectsThatExpireThisWeek
}
