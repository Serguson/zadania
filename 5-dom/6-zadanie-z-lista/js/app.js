const add=document.querySelector("#add");
const list=document.querySelector(".list");
const listSize=document.getElementsByClassName("element")
let counter=listSize.length

function addElement (nr) {
  const newElement=document.createElement("div");
  newElement.classList.add("element");
  const newElementInner = document.querySelector("#element-list").content.cloneNode(true);
  newElement.append(newElementInner);
  newElement.querySelector(".element-title").innerText=`Element numer ${counter}`;
  list.append(newElement);
}

add.addEventListener("click", e => {
  e.preventDefault();
  addElement(counter++);
})
