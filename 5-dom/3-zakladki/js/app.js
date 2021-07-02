const tabEl = document.querySelectorAll("li.tab-el")
const tabLink = document.querySelectorAll("tab-link")
for (const el of tabEl) {
  el.addEventLister("click", e=> {
   console.log("Kliknięto"})
}
