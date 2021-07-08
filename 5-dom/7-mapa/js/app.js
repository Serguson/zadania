const map=document.querySelector(".map");
const mapTooltip=document.createElement("div");
map.appendChild(mapTooltip);
mapTooltip.classList.add("map-tooltip");
mapTooltip.style="left: -9999px; top: -9999px";
const mapMarkers = document.getElementsByClassName("map-marker")

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

for (const element of mapMarkers) {

       element.addEventListener("mouseover", e =>{
          const name = e.originalTarget.dataset.name;
          const population = e.originalTarget.dataset.population;
          console.log(e);
          mapTooltip.innerHTML=`<h2>${name}</h2> <div>Population: <strong>${population}</strong></div>`;
          mapTooltip.style.left=`${e.pageX}+30+"px"`;
          mapTooltip.style.top=`${e.pageY}+30+"px"`;
       })}
