export default function calculateWeekNumber(date) {
        // date, how to calculate week: https://www.geeksforgeeks.org/calculate-current-week-number-in-javascript/
        //let date = new Date();
        //`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        let startDate = new Date(date.getFullYear(), 0, 1);
        var days = Math.floor((date-startDate) / (24 * 60 * 60 * 1000));
        return Math.ceil(days / 7);
};