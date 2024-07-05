let startYear = parseInt(prompt("Enter the start year:"));
let endYear = parseInt(prompt("Enter the end year:"));

let leapYearCount = 0;
for (let year = startYear; year <= endYear; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        leapYearCount++;
    }
}
console.log("Number of leap years:", leapYearCount);
