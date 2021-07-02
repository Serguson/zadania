const tabEl = document.querySelectorAll ("li.tab-el")
const tabElActive = document.querySelectorAll("li.tab-el-active")
const tabLink = document.querySelectorAll("a.tab-link")
const tabContent = document.querySelectorAll("div.tab-content")
const tabContentActive = document.querySelectorAll("div.tab-content-active")
for (const el of tabEl) {el.addEventListener("click", e=> {
  console.log("Kliknięto!");
  tabElActive.classList.remove("tab-el-active");
  el.classList.add("tab-el-active");
})}
