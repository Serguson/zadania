const menu=document.getElementById("menu")
menu.classList.add("menu");
const a=menu.getElementsByTagName("a");
const li=menu.getElementsByTagName("li");
for (const el of li){
  el.addEventListener("mouseover", e => {
    console.log(e);
    for (const element of li) {element.classList.remove("active")};
    el.classList.toggle("active")
  })
}
    
