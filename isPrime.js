var num = parseInt(prompt("Please enter number")); 
var isPrime = true; 

for (var i=2; i < num; i++){ 
    var result = num % i; 
    if (result == 0){
        console.log( num+ " is not a Prime Number! It is divisible by " + i)
        isPrime = false; 
        break;
    }
}

if(isPrime) {   
    console.log(num + " is a Prime Number.") ; 
}