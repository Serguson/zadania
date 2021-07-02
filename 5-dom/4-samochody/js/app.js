const button=document.getElementsByClassName("car-toggle-detail")
const carDetail=document.getElementsByClassName("car-detail")
const car=document.getElementsByClassName("car")
const carSimpleData=document.getElementsByClassName("car-simple-data")
for (const el of button){
  el.addEventListener("click", e => {
    console.log(e);
    }, true
               
)}
for (const el of car){
  el.addEventListener("click", e => {
    console.log(e);
  }
)}
