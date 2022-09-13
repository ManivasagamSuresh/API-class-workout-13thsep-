var div = document.createElement("div");
div.style.textAlign="center";

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");

var button = document.createElement("button");
button.setAttribute("type","button");
button.setAttribute("id","button")
button.classList.add("btn","btn-primary");
button.innerHTML="search";
button.addEventListener("click",fun);

var active = document.createElement("div");
active.setAttribute("id","active");

var recorded = document.createElement("div");
recorded.setAttribute("id","recorded");

var deaths = document.createElement("div");
deaths.setAttribute("id","deaths");

div.append(input,button,active,recorded,deaths);
document.body.append(div);


async function fun(){
    let countryname=document.getElementById("country").value;
    console.log(countryname);
    let url=`https://api.covid19api.com/dayone/country/${countryname}`;
    let result =await fetch(url);
    let result1= await result.json();
console.log(result1);
let indexNo = result1.length-1;
console.log(indexNo);
console.log(result1[indexNo].Active);
active.innerHTML=`Total Active Cases: ${result1[indexNo].Active}`
recorded.innerHTML=`Total Recorded Cases: ${result1[indexNo].Confirmed}`
deaths.innerHTML=`Total Deaths: ${result1[indexNo].Deaths}`

}
