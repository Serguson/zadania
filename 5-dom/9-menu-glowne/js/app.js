const menu=document.getElementById("menu")
menu.classList.add("menu");
const a=menu.getElementsByTagName("a");
const li=menu.getElementsByTagName("li");
for (const el of li){
  el.addEventListener("mouseover", e => {
    for (const element of li) {element.classList.remove("active")};
    el.classList.toggle("active")
  })
}
for (const el of a){
  el.addEventListener("click", e => {
    console.log (e);
    e.preventDefault();
    console.log (e.target);
    for (const element of li){
      if (element===el.parentElement){element.classList.add("expand")} else {element.classList.add("collapsed")}}
  })
}
    
