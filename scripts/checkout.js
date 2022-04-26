// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var total = localStorage.getItem("amount") || 0;
// var getamount = localStorage.getItem("amount");
console.log(total)
document.getElementById("wallet").innerText=total;

console.log("hi")