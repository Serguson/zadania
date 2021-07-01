const parent=document.querySelector("li.nav-el");
const navEl=document.querySelector("a.nav-link");
navEl.addEventListener("click", e => {
                        e.preventDefault();
                       console.log ("Kliknięto!");})
