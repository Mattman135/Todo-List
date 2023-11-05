export default function updateTitleAndDate(title) {
    const titleAndDateContainer = document.createElement('div');
    titleAndDateContainer.classList.add('titleAndDateContainer');

    // title
    const tabTitle = document.createElement('h1');
    tabTitle.id = 'tabTitle';
    tabTitle.innerHTML = title;

    // date, how to calculate week: https://www.geeksforgeeks.org/calculate-current-week-number-in-javascript/
    let date = new Date();
    //`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    let startDate = new Date(date.getFullYear(), 0, 1);
    var days = Math.floor((date-startDate) / (24 * 60 * 60 * 1000));
    var weekNumber = Math.ceil(days / 7);

    const p = document.createElement('p');
    p.classList.add('currentDateAndWeek');
    p.innerHTML = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} week ${weekNumber}`;


    // appending
    titleAndDateContainer.appendChild(tabTitle);
    titleAndDateContainer.appendChild(p);
    document.getElementById('right-content').appendChild(titleAndDateContainer);
};