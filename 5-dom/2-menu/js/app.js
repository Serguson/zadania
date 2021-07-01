const parent=document.querySelectorAll("li.nav-el");
const navEl=document.querySelectorAll("a.nav-link");

for (const el of navEl){
el.addEventListener("click", e => {
                        let navElActive=document.querySelectorAll("li.nav-el-active");
                        e.preventDefault();
                       console.log ("Kliknięto!");
                        navElActive.forEach (active=>active.classList.remove("nav-el-active")); 
                       e.currentTarget.classList.add("nav-el-active");
                     
})
}
