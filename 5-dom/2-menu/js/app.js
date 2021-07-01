const parent=document.querySelectorAll("li.nav-el");
const navEl=document.querySelectorAll("a.nav-link");
for (const el of parent){
el.addEventListener("click", e => {
                        e.preventDefault();
                       console.log ("Kliknięto!");})
}
