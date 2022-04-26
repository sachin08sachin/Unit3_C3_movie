// Store the wallet amount to your local storage with key "amount"
var total = localStorage.getItem("amount") || 0;
document.getElementById("wallet").innerText=total;
var sum=0;


function addWallet()
{
   
    var val = document.getElementById("amount").value;
     localStorage.setItem("amount",val);
     console.log(val);
    sum=Number(total)+Number(val);
    console.log(sum)
   localStorage.setItem("amount",sum);
   window.location.reload();
}