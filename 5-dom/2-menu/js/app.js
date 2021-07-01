const parent=document.querySelectorAll("li.nav-el");
const navEl=document.querySelectorAll("a.nav-link");
for (const el of parent){
navEl.addEventListener("click", e => {
                        e.preventDefault();
                       console.log ("Kliknięto!");})
}
