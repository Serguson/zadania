const add=document.querySelector("#add");
const list=document.querySelector(".list");

function addElement (nr) {
  const newElement=document.createElement("div");
  newElement.classList.add("element");
  const newElementInner = document.querySelector("#element-list").content.cloneNode(true);
  newElement.append(newElementInner);
  newElement.querySelector(".element-title").innerText="Element nr ";
  list.append(newElement);
}
