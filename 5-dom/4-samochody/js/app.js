const button=document.getElementsByClassName("car-toggle-detail")
const carDetail=document.getElementsByClassName("car-detail")
const car=document.getElementsByClassName("car")
const carSimpleData=document.getElementsByClassName("car-simple-data")

for (const el of car){
  el.addEventListener("click", e => {
    console.log(e);
    console.log("car");
    if (e.originalTarget.getAttribute("type")==="button"){
      console.log("jest!")}
  }
)}
