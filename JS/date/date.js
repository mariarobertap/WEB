date = new Date(0);
date = new Date();
//date = new Date(2022, 3, 4, 18, 1, 2, 3);
//date = new Date("April 20, 2022 16:20:01:02");

let year = date.getFullYear();
let month = date.getMonth();
let dayOfWeek = date.getDay();
let dayofMonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliSeconds = date.getMilliseconds();

console.log("Year:",year);
console.log("Month", month);
console.log("Day of week", dayOfWeek);
console.log(dayofMonth);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliSeconds);

date.setFullYear(2023);
date.setMonth(11);
date.setDate(25);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);

console.log(date);