const map=document.querySelector(".map");

cities.forEach( el => {
const element=document.createElement("a");
element.setAttribute("href", "cities[el].href");
element.classList.add("map-marker");
element.dataset.name="cities[el].name";
element.dataset.population="cities[el].population";
console.log("cities[el].map_x");
const x=cities[el].map_x";
const y="cities[el].map_y";
element.style=`left: ${x}px; top: ${y}px`;
map.appendChild(element);
})

const mapTooltip=document.createElement("div");
mapTooltip.classList.add("map-tooltip");
mapTooltip.style="left: -9999px; top: -9999px";
const mapMarkers = document.getElementsByClassName("map-marker");

for (const el of mapMarkers) {
  el.addEventListener("mouseover", e => {
    mapTooltip.innerHtml="<h2>Nazwa miasta</h2> <div>Population: <strong>Populacja miasta</strong></div>";
    mapTooltip.style.left=`${e.offsetX}+30px`;
    mapTooltip.style.top=`${e.offsetY}+30px`})}
