const firstAttempt = document.querySelectorAll(".first-attempt");
for (const el of firstAttempt){
  el.classList.add("active")
}
const elements = document.querySelectorAll ("body *")
for (const el of elements){
  if (el.tagName==="data-border"){
   el.dataset.elActive
  }
}
