const tabEl = document.getElementsByClassName ("tab-el")
const tabElActive = document.getElementsByClassName("tab-el-active")
const tabLink = document.getElementsByClassName("tab-link")
const tabContent = document.getElementsByClassName("tab-content")
const tabContentActive = document.getElementsByClassName("tab-content-active")
for (const el of tabEl) {el.addEventListener("click", e=> {
  console.log("Kliknięto!");
  tabElActive.classList.remove("tab-el-active");
  el.classList.add("tab-el-active");
})}
