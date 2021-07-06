const user=document.getElementsByClassName("user");
const form=document.querySelector("form");
const userList=document.getElementsByClassName("user-list");
const name=document.querySelector("#name");
const phone=document.querySelector("#phone");

function addUser (name, phone) {
  const newUser=document.createElement("li");
  newUser.classList.add("user");
  const newUserInner=document.querySelector("#newUser").content.cloneNode(true);
  newUser.append(newUserInner);
  newUser.querySelector(".user-name").innerText=name;
  newUser.querySelector(".user-phone").innerText=phone;
  userList.append(newUser);
}

  form.addEventListener("submit", e => {
    e.preventDefault();
  if (name.value!=="" && phone.value!=="") {
    addUser (name.value, phone.value);
    name.value=""
    phone.value=""
  }})
