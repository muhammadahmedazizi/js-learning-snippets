var date = new Date();
console.log(date);
ms = date.getTime();
console.log(ms);


console.log('getFullYear()')	;	console.log(date.getFullYear())
console.log('getMonth()')	;	console.log(date.getMonth())
console.log('getDate()')	;	console.log(date.getDate())
console.log('getHours()')	;	console.log(date.getHours())
console.log('getMinutes()')	;	console.log(date.getMinutes())
console.log('getSeconds()')	;	console.log(date.getSeconds())
console.log('getMilliseconds()')	;	console.log(date.getMilliseconds())
console.log('getTime()')	;	console.log(date.getTime())
console.log('getDay()')	;	console.log(date.getDay())



// Day name in English
const dayNames = ["Sun", "Mon","Tue","Wed","Thu","Fri","Sat"] // Created an array for day names
console.log("Today is "+ dayNames[date.getUTCDay()]);


// Month name in English
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]; // created an array for month names. 

console.log("The current month is " + monthNames[date.getMonth()]);



// Difference between two dates
var today = new Date();
var lastDate = new Date("November 30 2020 10:45:45");

//lastdate.setDate(2020,11,22);
console.log(lastDate); 

var timeDiff = lastDate.getTime() - today.getTime();
var days = timeDiff / (1000 * 60 * 60 * 24);

console.log(Math.floor(days)); 

