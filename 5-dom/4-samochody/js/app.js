const button=document.getElementsByClassName("car-toggle-detail")
const carDetail=document.getElementsByClassName("car-detail")
const car=document.getElementsByClassName("car")
const carSimpleData=document.getElementsByClassName("car-simple-data")

for (const el of button){
  el.addEventListener("click", e => {
    console.log(e);
    console.log("car");
    const car = el.closest(".car");
     if(car.children[1].hasAttribute("style")){car.children[1].removeAttribute("style")} else{car.children[1].addAttribute("style")};
    if (this.textContent==="Pokaż detale") {this.textContent="Schowaj detale"} else {this.textContent="Pokaż detale"};
    car.classList.toggle("car-show-detail");
  }
)}
