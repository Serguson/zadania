const firstAttempt = document.querySelectorAll(".first-attempt");
for (const el of firstAttempt){
  el.classList.add("active")
}
const elements = document.querySelectorAll ("body *")
elements.forEach(el=>{
  if (el.tagName==="data-border"){
  el.setAttribute(data-el-active);
  }
})
