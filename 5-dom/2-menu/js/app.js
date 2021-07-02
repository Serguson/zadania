const navEl=document.getElementsByClassName("nav-el");
const navLink=document.getElementsByClassName("nav-link");
let navElActive=document.getElementsByClassName("nav-el-active");
for (const el of navLink){
  el.addEventListener("click", e => {
    e.preventDefault();
    navElActive.classList.remove("nav-el-active");
    el.parentElement.classList.toggle("nav-el-active");
  })
}
    
