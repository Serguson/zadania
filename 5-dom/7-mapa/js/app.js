const map=document.querySelector(".map");
cities.forEach(el => {
const element=document.createElement("a");
element.setAttribute("href", "el.href");
element.classList.add("map-marker");
element.dataset.name="el.name";
element.dataset.population="el.population";
element.style.cssText=left: 180px; top: 270px;
map.appendChild(element);
})
