import calculateWeekNumber from "./calculateWeekNumber"
export default function updateTitleAndDate(title) {
  const titleAndDateContainer = document.createElement("div")
  titleAndDateContainer.classList.add("titleAndDateContainer")

  // title
  const tabTitle = document.createElement("h1")
  tabTitle.id = "tabTitle"
  tabTitle.innerHTML = title

  //
  let date = new Date()
  var weekNumber = calculateWeekNumber(date)

  const p = document.createElement("p")
  p.classList.add("currentDateAndWeek")
  p.innerHTML = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${date.getDate()} week ${weekNumber}`

  // appending
  titleAndDateContainer.appendChild(tabTitle)
  titleAndDateContainer.appendChild(p)
  document.getElementById("right-content").appendChild(titleAndDateContainer)
}
