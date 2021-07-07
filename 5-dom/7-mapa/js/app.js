const map=document.querySelector(".map");

for (i=0;i<cities.length;i++){
const element=document.createElement("a");
element.setAttribute("href", "cities[i].href");
element.classList.add("map-marker");
element.dataset.name="cities[i].name";
element.dataset.population="cities[i].population";
console.log("cities[i].map_x");
const x="cities[i].map_x";
const y="cities[i].map_y";
element.style=`left: ${x}px; top: ${y}px`;
map.appendChild(element);
}

const mapTooltip=document.createElement("div");
mapTooltip.classList.add("map-tooltip");
mapTooltip.style="left: -9999px; top: -9999px";
const mapMarkers = document.getElementsByClassName("map-marker");

for (const el of mapMarkers) {
  el.addEventListener("mouseover", e => {
    mapTooltip.innerHtml("<h2>Nazwa miasta</h2> <div>Population: <strong>Populacja miasta</strong></div>");
    mapTooltip.style.left=`${e.offsetX}+30px`;
    mapTooltip.style.top=`${e.offsetY}+30px`})}
