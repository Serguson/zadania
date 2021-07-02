const tabElActive = document.querySelector("li.tab-el-active")
const tabLink = document.querySelectorAll("li.a.tab-link")
for (const el of tabEl) {
  el.addEventLister("click", e=> {
   console.log("Kliknięto")})
}
