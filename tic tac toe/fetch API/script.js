// const URL = "https://cat-fact.herokuapp.com/facts";
// // let promise = fetch(URL);
// // console.log(promise);
// const para = document.querySelector("#para");
// const b1 = document.querySelector("#b1");
// b1.addEventListener("click",()=>{
//     doit();
// })
// const doit=async ()=>{
//     let response = await fetch(URL);
// console.log(response);
// let data = await response.json();
//  for(let i=0;i<5;i++){
//  para.innerText = data[i].text;
// }
// }

 
  const dropdowns = document.querySelectorAll(".dropdown select");
  const button = document.querySelector("form button");
  const fromCurr = document.querySelector(".from select");
  const toCurr = document.querySelector(".to select");
  const msg = document.querySelector(".msg");
  for (let select of dropdowns) {
    for (currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if(select.name==="from"&&currCode==="USD"){
        newOption.selected="selected";
      }
      else if(select.name==="to"&&currCode==="INR"){
        newOption.selected="selected";
      }
        select.append(newOption);
    }
    select.addEventListener("change",(evt)=>{
        flag(evt.target);
    })
 }

 const flag=(element)=>{
    let code = element.value;
    let countrycode = countryList[code];
    let newSrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    let img =element.parentElement.querySelector("img");
    img.src=newSrc;
 }
 button.addEventListener("click", (evt)=>{
    evt.preventDefault();
    exchange();
  } );
   const exchange=async ()=>{
    let amount = document.querySelector(".amount input");
    if(amount.value===""||amount.value<1){
        amount.value="1";
    }
    console.log(amount.value);
    console.log(fromCurr.value,toCurr.value);
    const BASE_URL =
    `https://exchange-rates.abstractapi.com/v1/live/?api_key=37d66ea720394157bd9a297406909619&base=${fromCurr.value}&target=${toCurr.value}`;
 let response = await fetch(BASE_URL);
 let data = await response.json();
 let rate = data.exchange_rates[toCurr.value];
let finalResult = amount.value*rate;
console.log(finalResult);
msg.innerText=`${amount.value} ${fromCurr.value} = ${finalResult} ${toCurr.value}`;
 
   };
window.document.addEventListener("load",()=>{
  exchange();
});