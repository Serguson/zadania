const paragraph=document.getElementsByClassName("nav-el");
const activeParagraph=document.getElementsByClassName("nav-el-active");
const navLink=document.getElementsByClassName("nav-link");
for (const el of navLink){
  el.addEventListener("click", e=> {
    for (const el of activeParagraph) {el.classList.remove("nav-el-active")};
    console.log(e);
    el.parentElement.classList.toggle("nav-el-active");
    const link=el.getAttribute("href");
    console.log(link);
    link.scrollIntoView();
    })
}
