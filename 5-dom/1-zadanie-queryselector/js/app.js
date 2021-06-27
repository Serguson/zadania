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

const hijack = document.querySelectorAll(".hijack")
for (const el of hijack){
  el.removeAttribute ("title")
}

elements.forEach(el=>{
  if (el.classList.contains("st1")&&el.classList.contains("st2")){
    el.style.color="red";
    el.style.fontSize="15px"
  }
  })

const attrib = document.querySelectorAll(".attrib")
for (const el of attrib) {
el.toggleAttribute("data-hack-active");
el.removeAttribute("data-hack-inactive");
}

const lastAttempt= document.querySelectorAll(".last-attempt.span")
for  (const el of lastAttempt){
  el.style.display="none";}

