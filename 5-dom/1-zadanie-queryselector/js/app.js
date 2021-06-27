const firstAttempt = document.querySelectorAll(".first-attempt");
for (const el of firstAttempt){
  el.classList.add("active")
}

const elements = document.querySelectorAll ("body *")
elements.forEach(el=>{
  if (el.hasAttribute("data-border")){
    el.dataset.elActive="";
  }
})

const hack=document.querySelectorAll(".hack")
for (const el of hack){
  el.setAttribute("title", "hacking")
}
