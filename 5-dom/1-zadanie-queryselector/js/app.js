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

const attrib = document.querySelector(".attrib")
attrib.toggleAttribute("data-hack-active")
attrib.removeAttribute("data-hack-inactive")

const lastAttempt= document.querySelector(".last-attempt")
for  (const el of lastAttempt){
  el.span.style.display="none";}

