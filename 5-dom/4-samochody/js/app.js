const button=document.getElementsByClassName("car-toggle-detail")
const carDetail=document.getElementsByClassName("car-detail")
const car=document.getElementsByClassName("car")
const carSimpleData=document.getElementsByClassName("car-simple-data")
for (const el of button){
  el.addEventListener("click", e => {
    const detail=el.closest(".car-detail")
    detail.removeAttribute("style")})
}
