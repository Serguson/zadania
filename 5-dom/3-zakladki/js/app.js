const tabEl = document.querySelector("li.tab-el")
const tabLink = document.querySelector ("tab-link")
for (const el of tabLink) {
  el.addEventLister("click", e=> {
    el.classList.add("tab-el-active")})
