const parent=document.querySelectorAll("li.nav-el");
const navEl=document.querySelectorAll("a.nav-link");
const navElActive=document.querySelector("li.nav-el-active");
for (const el of parent){
el.addEventListener("click", e => {
                        e.preventDefault();
                       console.log ("Kliknięto!");
                       el.classList.add("nav-el-active");
                        navElActive.classList.remove("nav-el-active");
})
}
