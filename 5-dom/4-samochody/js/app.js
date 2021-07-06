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
    if (this.textContent==="\n                            Pokaż detale\n                        ") {this.textContent="\n                            Schowaj detale\n                        "} else {this.textContent="\n                            Pokaż detale\n                        "};
    car.classList.toggle("car-show-detail");
  }
)}
