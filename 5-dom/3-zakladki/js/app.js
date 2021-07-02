const tabEl = document.querySelectorAll ("li.tab-el")
const tabElActive = document.querySelectorAll("li.tab-el-active")
const tabLink = document.querySelectorAll("a.tab-link")
const tabContent = document.querySelectorAll("div.tab-content")
const tabContentActive = document.querySelectorAll("div.tab-content-active")
for (const el of tabLink) {el.addEventListener("click", e=> {
  console.log("Kliknięto!")
  el.classList.toggle("tab-el-active")
})}
for (const el of tabLink) {el.addEventListener("click", e=> {
  el.classList.toggle("tab-el-active")})}
