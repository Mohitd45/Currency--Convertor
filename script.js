Base_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json';
const currency_url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json';


const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.getElementById('btn');
const fromCurr =document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg= document.querySelector(".msg")

for (let select of dropdowns) {
    for (Currcodes in countryList) {

        let newOption = document.createElement("option");
        newOption.innerText = Currcodes;
        newOption.value = Currcodes;
        if (select.name === "from" && Currcodes === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && Currcodes === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);

    }
    select.addEventListener("change", (evt) => {
        upDateflag(evt.target);
    })
}


const upDateflag = (element) => {
    let currcode = element.value;
    let countryCode = countryList[currcode];
    // console.log(currcode)
    // console.log(countryCode)
    let newSRC = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let new1 = element.parentElement.querySelectorAll("img");
    // console.log(new1);
    new1[0].src = newSRC;  
    // let imgFrom = document.getElementsByTagName('img');
    // console.log(imgFrom);
    // imgFrom[0].src = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    // console.log(imgFrom);

    // let newimg= document.getElementById('flagFrom');
    // newimg.src=newSRC;
}


btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount =document.querySelector(".amount input")
    let amtval =amount.value;
    if(amount<1 || amtval <1){
        amount.value=1;
        amtval=1;
    }

    thiscoun = fromCurr.value.toLowerCase();
    tocurrency =toCurr.value.toLowerCase();
    console.log(thiscoun, tocurrency);
    // console.log(fromCurr.value ,toCurr.value) 
    const currency_url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;   
    let response =await fetch(currency_url); 
    console.log(response);
    let data= await response.json(); 
    exchange_rate = data[thiscoun][tocurrency];
     console.log(exchange_rate);

    let final   = amtval * exchange_rate;
    msg.innerText = `${amtval} ${fromCurr.value} = ${(final)} ${toCurr.value}`;

    console.log(parseInt(final));



    

})


// const cureency_exchanger = async () => {
//     let response = await fetch(currency_url);
//     let data = await response.json();
//     console.log(data.usd.inr);
// }

// let response =  fetch(currency_url);
// let data =  response.json();
// console.log(data.usd.inr);