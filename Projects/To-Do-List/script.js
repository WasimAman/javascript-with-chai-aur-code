const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addBtn = document.querySelector("button");
// li.addEventListener("click", (e) => {
//     console.log(e.target.id);
//   // if(li.className==="checked"){
//   //     li.removeAttribute("checked");
//   // }else{
//   //     li.className = "checked";
//   // }

//   console.log("clicked");
// });
const li = document.createElement("li");
addBtn.addEventListener("click", () => {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  savaData();
});
console.log(inputBox);
console.log(listContainer);

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    savaData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    savaData();
  }
});

const savaData = () => {
  localStorage.setItem("data", listContainer.innerHTML);
};


const showData = ()=>{
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();