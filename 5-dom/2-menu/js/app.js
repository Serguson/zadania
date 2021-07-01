const parent=document.querySelectorAll("li.nav-el");
const navEl=document.querySelectorAll("a.nav-link");
let navElActive=document.querySelectorAll("li.nav-el-active");
for (const el of parent){
el.addEventListener("click", e => {
                        e.preventDefault();
                       console.log ("Kliknięto!");
                       navElActive.classList.remove("nav-el-active");
                       e.target.classList.add("nav-el-active");
                     
})
}
