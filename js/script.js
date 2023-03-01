
// let selectTime =document.getElementById("Time").addEventListener("change",TimeZone);
let submitbtn =document.getElementById("submit").addEventListener("click",TimeZone);

function TimeZone(){
    let getTime=document.getElementById("Time").value+":00";
    console.log("Selected Time :"+getTime);
// let India=document.getElementById("India");
//     document.getElementById("eg").innerHTML=getTime.value;
//console.log( getTime.value );


let currentDate = new Date().toJSON().slice(0, 10);
  
let dateTime = currentDate+" "+getTime;
console.log("Date and Time :"+dateTime);

const newtime = new Date(dateTime);
// console.log(newtime);
var TimeZones = [
    "Asia/Dubai",
    "Australia/Sydney",
    "Europe/London",
    "Europe/Amsterdam",
    
    "Africa/Cairo",
  ];
  
 
  TimeZones.forEach((timeZone) => {
    let strTime = newtime.toLocaleString("en-US", { timeZone: `${timeZone}` });
    console.log(timeZone, strTime);
  });

}