const map=document.querySelector(".map");

cities.forEach (el => {
  const {
    name,
    population,
    map_x,
    map_y,
    href,} = el;
const element=document.createElement("a");
element.setAttribute("href", `${href}`);
element.classList.add("map-marker");
element.dataset.name=`${name}`;
element.dataset.population=`${population}`;
console.log(`${map_x}`);
element.style=`left: ${map_x}px; top: ${map_y}px`;
map.appendChild(element);
})

const mapTooltip=document.createElement("div");
map.appendChild(mapTooltip);
mapTooltip.classList.add("map-tooltip");
mapTooltip.style="left: -9999px; top: -9999px";
const mapMarkers = document.getElementsByClassName("map-marker");

for (const el of mapMarkers) {
  el.addEventListener("mouseover", e => {
    console.log(e);
    mapTooltip.innerHtml=`<h2>Nazwa miasta</h2> <div>Population: <strong>Populacja miasta</strong></div>`;
    mapTooltip.style.left=`${e.pageX}px`;
    mapTooltip.style.top=`${e.pageY}px`})}
