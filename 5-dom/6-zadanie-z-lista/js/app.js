const add=document.querySelector("#add");
const list=document.querySelector(".list");
let counter=0

function addElement (nr) {
  const newElement=document.createElement("div");
  newElement.classList.add("element");
  const newElementInner = document.querySelector("#element-list").content.cloneNode(true);
  newElement.append(newElementInner);
  newElement.querySelector(".element-title").innerHtml="Element numer <span class="nr">${counter}</span>";
  list.append(newElement);
}

add.addEventListener("click", e => {
  e.preventDefault();
  addElement(counter++);
})
