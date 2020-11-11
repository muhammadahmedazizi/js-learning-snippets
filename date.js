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


// Month name in English
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]; // created an array


console.log("The current month is " + monthNames[date.getMonth()]);
