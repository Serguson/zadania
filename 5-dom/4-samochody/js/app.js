const button=document.getElementsByClassName("car-toggle-detail")
const carDetail=document.getElementsByClassName("car-detail")
const car=document.getElementsByClassName("car")
const carSimpleData=document.getElementsByClassName("car-simple-data")
for (const el of button) {
  el.addEventListener("click", e => {
    if (el.innerText==="POKAŻ DETALE") {el.innerText="SCHOWAJ DETALE"} else {el.innerText="POKAŻ DETALE"};
    if (el.closest(".car").children[1].style.display==="none") {el.closest(".car").children[1].style.display="block"} else {el.closest(".car").children[1].style.display="none"};
    el.closest(".car").classList.toggle("car-show-detail");
  })}
                                                                            

