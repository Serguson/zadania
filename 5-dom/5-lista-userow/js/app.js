const user=document.getElementsByClassName("user");
const form=document.getElementsByTagName("form");
const userList=document.getElementsByClassName("user-list");
const name=document.querySelector("#name");
const phone=document.querySelector("#phone");

function addUser (name, phone) {
  const newUser=document.createElement("li");
  newUser.classList.add("user");
  const newUserInner=document.querySelector("#newUser").content.cloneNode(true);
  element.append(newUserInner);
  element.querySelector(".user-name").innerText=name;
  element.querySelector(".user-phone").innerText=phone;
  userList.append(newUser);
}

for (const el of form) {
  el.addEventListener("submit", e => {
    e.preventDefault();
  if (name.value!=="" && phone.value!=="") {
    addUser (name.value, phone.value);
    name.value=""
    phone.value=""
  }})}
