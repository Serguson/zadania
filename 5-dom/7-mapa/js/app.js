const map=document.querySelector(".map");

cities.forEach (el => {
  const {
    name,
    population,
    map_x,
    map_y,
    href,} = el;
const element=document.createElement("a");
element.setAttribute("href", ${href});
element.classList.add("map-marker");
element.dataset.name=${name};
element.dataset.population=${population};
console.log(${map_x});
const x=${map_x};
const y=${map_y};
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
