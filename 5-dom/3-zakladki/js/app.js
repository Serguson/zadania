const tabEl = document.getElementsByClassName ("tab-el")
const tabElActive = document.getElementsByClassName("tab-el-active")
const tabLink = document.getElementsByClassName("tab-link")
const tabContent = document.getElementsByClassName("tab-content")
const tabContentActive = document.getElementsByClassName("tab-content-active")
const js = document.getElementById("js")
const python = document.getElementById("python")
const turboPascal = document.getElementById("turbo-pascal")
for (const el of tabEl) {el.addEventListener("click", e=> {
  console.log("Kliknięto!");
  for (const el of tabElActive) {el.classList.remove("tab-el-active")};
  el.classList.add("tab-el-active");
  for (const el of tabContentActive){el.classList.remove("tab-content-active")};
  if (el.firstElementChild.getAttribute("href")==="#js"){
    js.classList.add("tab-content-active")} else if (el.firstElementChild.getAttribute("href")==="#python"){
      python.classList.add("tab-content-active")} else {turboPascal.classList.add("tab-content-active")};
})}
