const parent=document.querySelectorAll("li.nav-el");
const navEl=document.querySelectorAll("a.nav-link");
let navElActive=document.querySelector("li.nav-el-active");
for (const el of parent){
el.addEventListener("click", e => {
                        e.preventDefault();
                       console.log ("Kliknięto!");
                       el.classList.add("nav-el-active");
                        navElActive.classList.remove("nav-el-active");
})
}
navElActive=document.querySelector("li.nav-el-active");
for (const el of navElActive){
  el.addEventListener("click", e==> {
                      e.preventDefault();
                      navElActive.classList.remove("nav-el-active");})}
