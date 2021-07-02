const parent=document.querySelectorAll("li.nav-el");
const navEl=document.querySelectorAll("a.nav-link");
 let navElActive=document.querySelectorAll("li.nav-el-active");
for (const el of navEl){
el.addEventListener("click", e => {
                       
                        e.preventDefault();
                       console.log ("Kliknięto!");
                       e.currentTarget.classList.toggle("nav-el-active");
                       navElAvctive.classList.remove("nav-el-active")
                     
})
}
