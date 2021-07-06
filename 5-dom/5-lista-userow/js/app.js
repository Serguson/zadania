const user=document.getElementsByClassName("user")
const form=document.getElementsByClassName("form")
const userList=document.getElementsByClassName("user-list")
for (const el of form) {
  el.addEventListener("submit", e => {
    const newUser=document.createElement("li");
    newUser.classList.add("user");
    userList.appendChild(newUser);
  })}
