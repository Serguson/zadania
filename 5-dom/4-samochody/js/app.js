const button=document.getElementsByClassName("car-toggle-detail")
const carDetail=document.getElementsByClassName("car-detail")
const car=document.getElementsByClassName("car")
const carSimpleData=document.getElementsByClassName("car-simple-data")

for (const el of button){
  el.addEventListener("click", e => {
    console.log(e);
    console.log("car");
    const car = el.closest(".car");
    if(car.children[1].hasAttribute("style")){car.children[1].setAttribute("display", "flex")} else{car.children[1].setAttribute("display", "none")};
    el.innerText="Schowaj detale";
    car.classList.toggle("car-show-detail");
  }
)}
