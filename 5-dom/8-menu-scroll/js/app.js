const paragraph=document.getElementsByClassName("nav-el")
const activeParagraph=document.querySelector(".nav-el-active")
const navLink=document.getElementsByClassName("nav-link")
for (const el of navLink){
  el.addEventListener("click", e=> {
    activeParagraph.classList.remove("nav-el-active");
    console.log(e);
    el.parentElement.classList.toggle("nav-el-active");
    })
}
